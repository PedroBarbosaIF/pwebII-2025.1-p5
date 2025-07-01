require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const NASA_API_KEY = process.env.NASA_API_KEY;

// Página de busca
router.get('/', (req, res) => {
  res.render('apod', { images: null, query: '', error: null });
});

// Busca imagens APOD
router.post('/search', async (req, res) => {
  const { astro } = req.body;
  try {
    // Busca últimos 30 dias
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 29);
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${startDate.toISOString().slice(0,10)}&end_date=${endDate.toISOString().slice(0,10)}`;
    const response = await axios.get(url);
    // Filtra por termo e sem copyright
    const images = response.data.filter(img =>
      (!img.copyright || img.copyright === '') &&
      (img.title.toLowerCase().includes(astro.toLowerCase()) ||
       (img.explanation && img.explanation.toLowerCase().includes(astro.toLowerCase()))) &&
      img.media_type === 'image'
    );
    res.render('apod', { images, query: astro, error: null });
  } catch (err) {
    res.render('apod', { images: null, query: astro, error: 'Erro ao buscar imagens.' });
  }
});

module.exports = router;
