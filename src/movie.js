const fs = require('fs');

function movie(req, res) {
    let data = fs.readFileSync("public/json/moviedetails.json");
    let homeData = JSON.parse(data);
    res.render('movie', homeData);
}
module.exports = movie
