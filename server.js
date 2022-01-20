// Módulo externo
const express = require('express');
const app = express();  
// diretório - arquivos estáticos

app.use(express.static('public'));

// motor para embutir JS no HTML
app.set('view engine', 'ejs') 

let allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	next();
  }
app.use(allowCrossDomain);

// Módulos internos
const home = require('./src/home');
const movie = require('./src/movie');
const user = require('./src/user');

// ROTAS
app.get('/', home.index)
app.get('/user/:userId', user.index)
app.get('/movie/:movieId', movie.movieById)
app.get('/movies', movie.index)
app.get('/movies/:movieQuery', movie.search)

const porta = 8080

app.listen(porta, function () {
	console.log('Server listening on port ' + porta)
})