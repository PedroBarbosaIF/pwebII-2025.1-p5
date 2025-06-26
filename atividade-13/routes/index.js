var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let quote = '';
  try {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    quote = data[0];
  } catch (err) {
    quote = 'Não foi possível obter a mensagem do dia.';
  }
  res.render('index', { title: 'Mensagem do Dia', quote });
});

module.exports = router;
