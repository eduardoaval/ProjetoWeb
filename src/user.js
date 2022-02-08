const { default: fetch } = require('cross-fetch');
const userInfo = require('./service')

module.exports = {
    async index(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const { userId }  = req.params;
        const user = await (await fetch(`http://localhost:9090/users/${userId}`)).json();
        const medias = await (await fetch(`http://localhost:9090/media/user/${userId}`)).json();
        res.render('user/index', { User: user, Movies:medias, IsLogged, UserId });
    }
}
