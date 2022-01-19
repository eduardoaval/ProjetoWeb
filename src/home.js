const { default: fetch } = require('cross-fetch');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const response = await fetch(`http://localhost:9090/media/releases`);
        const releases = await response.json();
        let homeData = { Releases: releases, TopContent: [], NewReviews: [] }
        res.render('index', homeData);
    }
}
