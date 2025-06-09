# Solaire's Wiki

Feito por Pedro H. A. Barbosa

## ✨ Funcionalidades

- Listagem de chefes (bosses) e locais (places) do universo Dark Souls
- Visualização de detalhes de cada chefe e local

## 🚀 Instalação

1. Clone este repositório:
   ```sh
   git clone <URL-DO-REPOSITORIO>
   cd Solaire's-Wiki
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   npm start
   ```
4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 🗂️ Estrutura do Projeto

```
Solaire's-Wiki/
├── app.js                # Arquivo principal da aplicação
├── package.json          # Dependências e scripts
├── routes/               # Rotas da aplicação
│   ├── bosses.js         # Rotas relacionadas aos chefes
│   ├── places.js         # Rotas relacionadas aos locais
│   └── index.js          # Rota principal
├── data/                 # Dados em JSON
│   ├── bosses.json       # Dados dos chefes
│   └── places.json       # Dados dos locais
├── views/                # Templates EJS
│   ├── *.ejs             # Páginas principais
│   └── partials/         # Componentes reutilizáveis
├── public/               # Arquivos estáticos
│   ├── images/           # Imagens do projeto
│   ├── stylesheets/      # CSS
│   └── javascripts/      # JS
└── bin/www               # Inicialização do servidor
```

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- CSS

## 👤 Autor

- Pedro (pwebII-2025.1-p5)

## 📄 Licença

Este projeto é apenas para fins educacionais.
