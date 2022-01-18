// Módulo externo
const express = require('express');  
const app = express();  
// diretório - arquivos estáticos

app.use(express.static('public'));

// motor para embutir JS no HTML
app.set('view engine', 'ejs') 

// Módulos internos
const home = require('./src/home')
const movie = require('./src/movie')

// ROTAS
app.get('/', home)

app.get('/movie/:movieId', movie)

const porta = 8080

app.listen(porta, function () {
	console.log('Server listening on port ' + porta)
})