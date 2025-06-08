var express = require('express');
var router = express.Router();

let allBossesData = require('../data/bosses.json');

router.get('/', function (req, res, next){
  res.render('bosses_list', 
    
    {
      title: 'Lista de Chefes',
    }

  );
});

router.get('/:id', function (req, res, next) {
  // Pega o id do personagem.
  let bossId = req.params.id;
  bossId = formatText(bossId);
  // Filtrando a lista de personagens e pegando só o personagem em questão.
  const boss = allBossesData.find(boss => boss.id === bossId);

  if(boss){
    res.render('bosses', 
      
    {
      selected: bossId,
      bossesList: allBossesData,
      nome: boss.nameCharacter,
      descricao: boss.descricao,
      imgsrc: boss.imgsrc
    }
    
    );
  } else {
    // Se o personagem não for encontrado, encaminha para um erro 404
    const err = new Error('Personagem não encontrado');
    err.status = 404;
    next(err); // Deixa o middleware de erro do Express Generator lidar com isso :D
  }

});

function formatText(str) {
  return str
    .normalize("NFD") // Decompor caracteres acentuados em seus componentes base e diacríticos
    .replace(/[\u0300-\u036f]/g, "") // Remover os diacríticos (acentos)
    .toLowerCase() // Converter para minúsculas
    .replace(/[^a-z0-9\s]/g, ""); // Remover símbolos, mantendo apenas letras, números e espaços
}

module.exports = router;