const { default: fetch } = require('cross-fetch');
const fs = require('fs');

async function movie(req, res) {
    const { movieId }  = req.params;
    const response = await fetch(`http://localhost:9090/medias/${movieId}`);
    const movie = await response.json();
    let date = new Date(movie.releaseDate);
    let releaseDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +date.getFullYear(); 
    let movieData = { Movie: {...movie, releaseDate }, Reviews: []}
    res.render('movie', movieData);
}
module.exports = movie
