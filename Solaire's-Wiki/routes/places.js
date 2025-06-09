var express = require("express");
var router = express.Router();

let allPlacesData = require("../data/places.json");

/* GET home page. */

/* Rota para a lista de personagens (URL: /characters) */
/*router.get("/", function (req, res, next) {
  res.render(
    "places_list",

    {
      title: "Lista de Lugares",
    }
  );
});
*/

// Pegando o id do personagem pela rota.
router.get("/:id", function (req, res, next) {
  // Pega o id do personagem.
  let placeId = req.params.id;
  placeId = formatText(placeId);
  // Filtrando a lista de personagens e pegando só o personagem em questão.
  const place = allPlacesData.find((place) => place.id === placeId);

  if (place) {
    res.render(
      "places",

      {
        selected: placeId,
        placesList: allPlacesData,
        title: place.nome,
        nome: place.nome,
        descricao: place.descricao,
        imgsrc: place.imgsrc,
      }
    );
  } else {
    // Se o personagem não for encontrado, encaminha para um erro 404
    const err = new Error("Lugar não encontrado");
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
