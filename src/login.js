const { default: fetch } = require('cross-fetch');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    async login(req, res) {
        const { email, password }  = req.body;
        const response = await fetch(`http://localhost:9090/user/login`, { method: 'POST', body: JSON.stringify(req.body),
         headers: {'Content-Type': 'application/json'}});
        if(response.status == 200)
        {
            const token = (await response.json()).accessToken
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
                if(err)
                {
                    return res.status(response.status).json({error: 'Not Allowed'});
                }
                req.session.user = user;
                req.session.token = token; 
                return res.status(response.status).send();
            })
        }
        else{
            res.status(response.status).json(await response.json());
        }
    },
    async index(req, res) {
        res.render('login/index');
    },

    async signup(req, res) {
        res.render('login/signup');
    },

    async logout(req, res){
        req.session.user = null;
        req.session.token = null; 
        return res.status(200).send();
    }
}
