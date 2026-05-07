const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Banco de dados SQLite
const db = new Database('produtos.db');

// Criar tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// =====================
// ROTAS
// =====================

// GET /produtos — Listar todos (com busca opcional por nome)
app.get('/produtos', (req, res) => {
  const { busca } = req.query;
  let produtos;

  if (busca && busca.trim() !== '') {
    const stmt = db.prepare(`
      SELECT * FROM produtos
      WHERE nome LIKE ?
      ORDER BY nome ASC
    `);
    produtos = stmt.all(`%${busca.trim()}%`);
  } else {
    const stmt = db.prepare('SELECT * FROM produtos ORDER BY nome ASC');
    produtos = stmt.all();
  }

  res.json(produtos);
});

// POST /produtos — Criar produto
app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome é obrigatório.' });
  }
  if (preco === undefined || isNaN(preco) || Number(preco) < 0) {
    return res.status(400).json({ erro: 'Preço inválido.' });
  }

  const stmt = db.prepare('INSERT INTO produtos (nome, preco) VALUES (?, ?)');
  const result = stmt.run(nome.trim(), Number(preco));

  const novoProduto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(novoProduto);
});

// PUT /produtos/:id — Atualizar produto
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  if (!nome || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome é obrigatório.' });
  }
  if (preco === undefined || isNaN(preco) || Number(preco) < 0) {
    return res.status(400).json({ erro: 'Preço inválido.' });
  }

  const existe = db.prepare('SELECT id FROM produtos WHERE id = ?').get(id);
  if (!existe) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  db.prepare('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?')
    .run(nome.trim(), Number(preco), id);

  const atualizado = db.prepare('SELECT * FROM produtos WHERE id = ?').get(id);
  res.json(atualizado);
});

// DELETE /produtos/:id — Excluir produto
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;

  const existe = db.prepare('SELECT id FROM produtos WHERE id = ?').get(id);
  if (!existe) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  db.prepare('DELETE FROM produtos WHERE id = ?').run(id);
  res.json({ mensagem: 'Produto excluído com sucesso.', id: Number(id) });
});

// DELETE /produtos — Limpar todos os produtos
app.delete('/produtos', (req, res) => {
  db.prepare('DELETE FROM produtos').run();
  res.json({ mensagem: 'Todos os produtos foram removidos.' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📦 Banco de dados: produtos.db`);
});