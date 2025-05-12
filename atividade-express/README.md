# Atividade Express

## Requisitos

1. **Middleware para Rotas**: Criar uma função de middleware para cada rota exibindo apenas uma página com o nome da rota.
2. **Middleware de Aplicação**: Criar uma função middleware que registra no console o acesso a cada página.
3. **Rota Signin**: Criar uma rota `/users/:userid` que recebe o `userid` do usuário e exibe uma mensagem de boas-vindas usando esse valor.
4. **Redirecionamento para Signup**: Caso o usuário acesse sem `userid`, ele será redirecionado para a página de signup utilizando `res.redirect()`.
5. **Página de Erro 404**: Qualquer página que não tenha uma rota definida será direcionada para uma página de erro 404 com um link para o index, utilizando `res.status()`.

## Estrutura do Projeto

```
atividade-express/
├── app.js
├── package.json
├── README.md
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   ├── users.js
│   ├── usersSigninRoute.js
│   ├── usersSigninUseridRoute.js
│   └── usersSignupRoute.js
└── views/
    ├── error.ejs
    └── index.ejs
```

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse a aplicação no navegador em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js.
- **EJS**: Template engine para renderização de páginas dinâmicas.

## Funcionalidades

- Middleware para registro de acessos.
- Rotas dinâmicas com parâmetros.
- Redirecionamento e tratamento de erros.

## Autor

Pedro Barbosa

---

Sinta-se à vontade para contribuir ou relatar problemas!
