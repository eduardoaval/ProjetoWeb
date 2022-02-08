const { default: fetch } = require('cross-fetch');
const userInfo = require('./service')

module.exports = {
    async index(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const releases = await (await fetch(`http://localhost:9090/media/releases`)).json();
        const topContent = await (await fetch(`http://localhost:9090/media/topcontent`)).json();
        const latestReviews = await (await fetch(`http://localhost:9090/review/latest`)).json();
        let homeData = { Releases: releases, TopContent: topContent, NewReviews: latestReviews, IsLogged, UserId }
        res.render('index', homeData);
    }
}
