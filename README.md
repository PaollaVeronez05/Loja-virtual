# 🛍️ Loja Virtual — Sistema de Produtos com CRUD Completo

![Node.js](https://img.shields.io/badge/Node.js-v24+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/licença-MIT-blue?style=for-the-badge)

> Aplicação web completa para gerenciamento de produtos de uma loja virtual, com CRUD completo, busca, relatório e interface moderna. Desenvolvida com HTML, CSS e JavaScript no front-end, Node.js + Express no back-end e SQLite como banco de dados.

---

## 📋 Índice

<p align="center">
 <a href="#-sobre-o-projeto">
 <img src="https://img.shields.io/badge/Sobre%20o%20Projeto-1E90FF?style=for-the-badge&logo=readme&logoColor=white">
 </a>

 <a href="#-funcionalidades">
 <img src="https://img.shields.io/badge/Funcionalidades-1E90FF?style=for-the-badge&logo=github&logoColor=white">
 </a>

 <a href="#-tecnologias-utilizadas">
 <img src="https://img.shields.io/badge/Tecnologias-1E90FF?style=for-the-badge&logo=visualstudiocode&logoColor=white">
 </a>

 <a href="#-instalação">
 <img src="https://img.shields.io/badge/Instalação-1E90FF?style=for-the-badge&logo=windows-terminal&logoColor=white">
 </a>

 <a href="#-como-usar">
 <img src="https://img.shields.io/badge/Como%20Usar-1E90FF?style=for-the-badge&logo=node.js&logoColor=white">
 </a>
</p>

---

## 🧠 Sobre o Projeto

A **Loja Virtual** é um sistema web de gerenciamento de produtos desenvolvido com a arquitetura **Front-end ↔ Back-end ↔ Banco de Dados**, seguindo o fluxo:

```
HTML → fetch() → Express → SQLite → resposta → tela
```

O projeto foi desenvolvido com fins educacionais, demonstrando na prática o uso de:

- Criação de rotas REST com `Express`
- Comunicação assíncrona com `fetch()` e `async/await`
- Banco de dados relacional leve com `better-sqlite3`
- CRUD completo (Create, Read, Update, Delete)
- Atualização dinâmica da interface sem recarregar a página

---

## ✅ Funcionalidades

- [x] Cadastro de novos produtos (nome e preço)
- [x] Listagem de todos os produtos em tabela
- [x] Edição de nome e preço de qualquer produto
- [x] Exclusão individual com modal de confirmação ("Tem certeza?")
- [x] Busca por nome com filtro no back-end
- [x] Ordenação por nome ou preço
- [x] Relatório com total de produtos, soma e preço médio
- [x] Destaque visual para produtos acima de R$ 1.000
- [x] Botão "Limpar tudo" com confirmação
- [x] Notificações toast para cada ação realizada

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript no back-end |
| [Express](https://expressjs.com/) | Framework para criação das rotas REST |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | Banco de dados SQLite para Node.js |
| [HTML5 + CSS3](https://developer.mozilla.org/pt-BR/) | Estrutura e estilização da interface |
| [JavaScript (fetch)](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) | Comunicação assíncrona com o back-end |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- [npm](https://www.npmjs.com/) (já incluído com o Node.js)

Verifique sua instalação:

```bash
node --version
npm --version
```

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/loja-virtual.git
cd loja-virtual
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará automaticamente: `express`, `better-sqlite3` e `cors`.

> ⚠️ A instalação do `better-sqlite3` pode demorar alguns segundos pois envolve a compilação de um módulo nativo.

---

## ▶️ Como Usar

### Executando o servidor

```bash
node server.js
```

Se aparecer no terminal:

```
✅ Servidor rodando em http://localhost:3000
📦 Banco de dados: produtos.db
```

Acesse no navegador: **http://localhost:3000**

> 💡 O arquivo `produtos.db` é gerado automaticamente na primeira execução. Não é necessário criá-lo manualmente.

---

## 📁 Estrutura do Projeto

```
loja-virtual/
│
├── index.html # Interface do usuário (front-end)
├── style.css # Estilização da interface
├── server.js # Servidor Express + rotas da API
├── produtos.db # Banco de dados SQLite (gerado automaticamente)
├── package.json # Metadados e dependências do projeto
├── package-lock.json # Lock file das dependências
├── node_modules/ # Dependências instaladas (não versionar)
└── README.md # Documentação do projeto
```

---

## 🔌 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos?busca=termo` | Filtra produtos por nome |
| `POST` | `/produtos` | Cadastra novo produto |
| `PUT` | `/produtos/:id` | Atualiza produto existente |
| `DELETE` | `/produtos/:id` | Remove produto por ID |
| `DELETE` | `/produtos` | Remove todos os produtos |

---

## 🗄️ Banco de Dados

O projeto utiliza SQLite com uma única tabela chamada `produtos`:

```sql
CREATE TABLE IF NOT EXISTS produtos (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 nome TEXT NOT NULL,
 preco REAL NOT NULL,
 criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Campos

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER | Identificador único autoincremental |
| `nome` | TEXT | Nome do produto |
| `preco` | REAL | Preço do produto |
| `criado_em` | DATETIME | Data e hora do cadastro (preenchida automaticamente) |

---

## ❓ Explicação das Funcionalidades

**Como funciona o DELETE?**
Ao clicar em "✕", um modal de confirmação é exibido perguntando "Tem certeza?". Se confirmado, o front-end envia `fetch(DELETE /produtos/:id)` ao Express, que executa `DELETE FROM produtos WHERE id = ?` no SQLite. A lista é atualizada automaticamente na tela.

**Como funciona o UPDATE?**
Ao clicar em "Editar", os dados do produto preenchem o formulário. Após salvar, o front-end envia `fetch(PUT /produtos/:id)` com o JSON `{ nome, preco }`. O Express executa `UPDATE produtos SET ...` no banco e a tela é recarregada.

**Onde foi feita a soma dos valores?**
No front-end, dentro da função `atualizarStats()`, usando `.reduce()` após cada carregamento da lista:

```javascript
const soma = produtos.reduce((acc, p) => acc + p.preco, 0);
```

---

## ⚠️ Possíveis Erros

### `Cannot find module 'better-sqlite3'`

As dependências não foram instaladas. Execute:

```bash
npm install
```

### Porta 3000 já em uso

Abra o `server.js` e troque o número da porta:

```javascript
// Altere para outra porta disponível
const PORT = 3001;
```

### Erro ao instalar `better-sqlite3`

Em alguns ambientes, a compilação nativa pode falhar. Tente:

```bash
npm install better-sqlite3 --build-from-source
```

---
## 👥 Participantes

| Nome | E-mail |
|---|---|
| Paolla Veronez | [paollap.veronez@gmail.com](mailto:paollap.veronez@gmail.com) |
| Rafaela Oliveira | [rafaelacristina1510.oliveira@gmail.com](mailto:rafaelacristina1510.oliveira@gmail.com) |
| Isabella Radael | [isabella.radael09@gmail.com](mailto:isabella.radael09@gmail.com) |
| Rafael Brecci | [fbrecci@gmail.com](mailto:fbrecci@gmail.com) |
| Eduardo Zanetti | [eduardozanettiluis@gmail.com](mailto:eduardozanettiluis@gmail.com) |

---

<div align="center">
 Senai A Jacob Lafer
</div>
