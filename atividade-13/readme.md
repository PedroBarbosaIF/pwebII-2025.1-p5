# Atividade 13 – Programação Web II (2025.1)

Este projeto é uma aplicação web desenvolvida em Node.js utilizando o framework Express. O objetivo é demonstrar conceitos fundamentais de desenvolvimento web, incluindo rotas, views, middlewares e organização de projetos.

## Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autores](#autores)

## Descrição

Esta aplicação serve como base para atividades práticas da disciplina de Programação Web II. Ela implementa rotas básicas, renderização de páginas com EJS e serve arquivos estáticos.

## Funcionalidades

- Página inicial com renderização dinâmica
- Rotas para usuários
- Tratamento de erros
- Servir arquivos estáticos (CSS)

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd atividade-13
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

1. Inicie a aplicação:
   ```bash
   npm start
   ```
2. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```
atividade-13/
├── app.js              # Arquivo principal da aplicação
├── bin/www             # Inicialização do servidor
├── package.json        # Dependências e scripts
├── public/             # Arquivos estáticos (CSS, imagens)
│   └── stylesheets/
│       └── style.css
├── routes/             # Rotas da aplicação
│   ├── index.js
│   └── users.js
├── views/              # Templates EJS
│   ├── error.ejs
│   └── index.ejs
└── readme.md           # Documentação do projeto
```

## Autores

- [Pedro Barbosa](https://github.com/PedroBarbosaIF)

---

> Projeto desenvolvido para fins educacionais na disciplina de Programação Web II – 2025.1.
