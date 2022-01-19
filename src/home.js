const { default: fetch } = require('cross-fetch');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const releases = await (await fetch(`http://localhost:9090/media/releases`)).json();
        const topContent = await (await fetch(`http://localhost:9090/media/topcontent`)).json();
        let homeData = { Releases: releases, TopContent: topContent, NewReviews: [] }
        res.render('index', homeData);
    }
}
