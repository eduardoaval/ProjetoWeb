const { default: fetch } = require('cross-fetch');

module.exports = {
    async index(req, res) {
        const releases = await (await fetch(`http://localhost:9090/media/releases`)).json();
        const topContent = await (await fetch(`http://localhost:9090/media/topcontent`)).json();
        const latestReviews = await (await fetch(`http://localhost:9090/review/latest`)).json();
        let homeData = { Releases: releases, TopContent: topContent, NewReviews: latestReviews }
        res.render('index', homeData);
    }
}
