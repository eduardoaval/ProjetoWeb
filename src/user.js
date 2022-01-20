const { default: fetch } = require('cross-fetch');

module.exports = {
    async index(req, res) {
        const { userId }  = req.params;
        const response = await fetch(`http://localhost:9090/users/${userId}`);
        const user = await response.json();
        res.render('user/index', { User: user });
    }
}
