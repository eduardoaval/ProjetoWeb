const { default: fetch } = require('cross-fetch');
const fs = require('fs');

module.exports = {
    async movieById(req, res) {
        const { movieId }  = req.params;
        const response = await fetch(`http://localhost:9090/medias/${movieId}`);
        const movie = await response.json();
        let date = new Date(movie.releaseDate);
        let releaseDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +date.getFullYear(); 
        let movieData = { Movie: {...movie, releaseDate }, Reviews: []}
        res.render('movie/details', movieData);
    },

    async index(req, res) {
        const response = await fetch(`http://localhost:9090/medias`);
        const movies = await response.json();
        let moviesData = { Movies: movies }
        res.render('movie/index', moviesData);
    },

    
}
