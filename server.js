// Módulo externo
const express = require('express');
const app = express();  
const bodyparser = require('body-parser');
const sessions = require('express-session');
const cookieParser = require("cookie-parser");
// diretório - arquivos estáticos

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 24 * 60 * 60 * 365 * 1000 },
    resave: false
}));
app.use(cookieParser());

// motor para embutir JS no HTML
app.set('view engine', 'ejs') 

let allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
  }
app.use(allowCrossDomain);

// Módulos internos
const home = require('./src/home');
const login = require('./src/login');
const movie = require('./src/movie');
const user = require('./src/user');

// ROTAS
app.get('/', home.index)
app.get('/login', login.index)
app.get('/logout', login.logout)
app.post('/login', login.login)
app.get('/user/:userId', user.index)
app.get('/movie/:movieId', movie.movieById)
app.get('/movies', movie.index)
app.get('/movies/:movieQuery', movie.search)

const porta = 8080

app.listen(porta, function () {
	console.log('Server listening on port ' + porta)
})