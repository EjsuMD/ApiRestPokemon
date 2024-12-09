const express = require('express');
const app = express();
const PokemonController = require('./controllers/PokemonController');


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', PokemonController.index);
app.get('/BuscarPorTipo', PokemonController.buscarPorTipo);




app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});