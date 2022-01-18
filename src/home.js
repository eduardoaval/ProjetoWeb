const fs = require('fs');

function home(req, res) {
    let data = fs.readFileSync("public/json/homepage.json");
    let homeData = JSON.parse(data);
    res.render('index', homeData);
}
module.exports = home
