const axios = require('axios');
const puppeteer = require('puppeteer');


exports.index = async (req, res) => {
  const url = 'https://pokeapi.co/api/v2/type/';

  try {
    const respuesta = await axios.get(url);
    const tiposPokemon = respuesta.data.results;
    res.render('index', { tiposPokemon });
  } catch (error) {
    console.error(error);
    res.status(404).send('No se pudo obtener los tipos de pokémon');
  }
};


exports.buscarPorTipo = async (req, res) => {
  const tipoPokemon = req.query.tipo;
  const url = `https://pokeapi.co/api/v2/type/${tipoPokemon}`;

  try {
    const respuesta = await axios.get(url);
    const pokemones = respuesta.data.pokemon;
    res.render('resultados', { pokemones, tipoPokemon });
  } catch (error) {
    console.error(error);
    res.status(404).send('Pokémon no encontrado');
  }
};

