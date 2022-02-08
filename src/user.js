const { default: fetch } = require('cross-fetch');
const userInfo = require('./service')

module.exports = {
    async index(req, res) {
        let { IsLogged, UserId } = userInfo.getUserInfo(req.session);
        const { userId }  = req.params;
        const response = await fetch(`http://localhost:9090/users/${userId}`);
        const user = await response.json();
        res.render('user/index', { User: user, IsLogged, UserId });
    }
}
