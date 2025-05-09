const express = require("express");
//importando módulo express, framework usado para criar servidores web

const app = express();
/*criando instância da aplicação express, usada para configurar rotas, MWs 
e iniciar o servidor*/

const port = 3000;
//define a porta onde o servidor será executado

app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleString();
  next();
});
/*Este é um MW GLOBAL que será executado para TODAS as requisições.
Ele adiciona uma propriedade requestTime ao objeto req, contendo a data e hora da requisição.
A função next() é chamada para passar o controle para o próximo middleware ou rota.*/

app.get("/", (req, res) => {
  res.send(`Acesso à rota 'root' ${req.requestTime}`);
  console.log(`Acesso à rota 'root' ${req.requestTime}`);
});
/*
app.get é usado para definir um manipulador de rota para requisições GET.
O caminho especificado é "/", que representa a rota raiz do servidor 
(ex.: http://localhost:3000/).
Quando o servidor recebe uma requisição GET para essa rota, 
a função de CALLBACK é executada.
*/

app.get("/about", (req, res) => {
  res.send(`Acesso à rota '/about' ${req.requestTime}`);
  console.log(`Acesso à rota '/about' ${req.requestTime}`);
});

/*app.get("/data", (req, res) => {
  res.send("data");
});*/

app.post("/data", (req, res) => {
  res.send(`Acesso à rota '/data' ${req.requestTime}`);
  console.log(`Acesso à rota '/data' ${req.requestTime}`);
});

app.get("/users", (req, res) => {
  res.send(`Acesso à rota '/users' ${req.requestTime}`);
  console.log(`Acesso à rota '/users' ${req.requestTime}`);
});

app.get("/users/signin", (req, res) => {
  console.log(`Acesso à rota '/users/signin' ${req.requestTime}`);
  res.redirect("http://localhost:3000/users/signup");
});

app.get("/users/signup", (req, res) => {
  res.send(`Acesso à rota '/users/signup' ${req.requestTime}`);
  console.log(`Acesso à rota '/users/signup' ${req.requestTime}`);
});

app.get("/users/signin/:userid", (req, res) => {
  res.send(
    `Acesso à rota '/users/signin/:${req.params.userid}' ${req.requestTime}`
  );
  console.log(
    `Acesso à rota '/users/signin/:${req.params.userid}' ${req.requestTime}`
  );
});

app.use((req, res) => {
  res.status(404).send(`
      Página não encontrada
      <a href="http://localhost:3000/"> Voltar para a página inicial</a>
  `);
});

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});
