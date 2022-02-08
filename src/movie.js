const { default: fetch } = require('cross-fetch');
const userInfo = require('./service')

module.exports = {
    async movieById(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const { movieId }  = req.params;
        const response = await fetch(`http://localhost:9090/medias/${movieId}`);
        const movie = await response.json();
        let date = new Date(movie.releaseDate);
        let releaseDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +date.getFullYear(); 
        let movieData = { Movie: {...movie, releaseDate }, IsLogged, UserId }
        res.render('movie/details', movieData);
    },

    async index(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const response = await fetch(`http://localhost:9090/medias`);
        const movies = await response.json();
        let moviesData = { Movies: movies, IsLogged, UserId }
        res.render('movie/index', moviesData);
    },

    async search(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const { movieQuery }  = req.params;
        const response = await fetch(`http://localhost:9090/media/search/${movieQuery}`);
        const movies = await response.json();
        let moviesData = { Movies: movies, IsLogged, UserId }
        res.render('movie/index', moviesData);
    },
}
