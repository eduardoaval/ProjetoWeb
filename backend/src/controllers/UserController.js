const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');

module.exports = {
    async createUser(req, res){
        const { nickName, name, surname, email, password } = req.body;

        const userDb = await User.findOne({ where : { email }});
        if(!!userDb){
            return res.status(400).json({ error: "User already exists"});
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ nickName, name, surname, email, password:hashedPassword });
            return res.json(user);
        } catch (error) {
            return res.status(500).send();
        }
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async getById(req, res) {
        const { userId }  = req.params;
        const user = await User.findByPk(userId);

        return res.json(user);
    },

    async login(req, res) {
        const { email, password }  = req.body;
        const user = await User.findOne({ where : { email }});
        if(!user){
            return res.status(400).json({ error: "User not found"});
        }

        try {
            if(await bcrypt.compare(password, user.password)){
                const userObj = { id:user.id, nickName: user.nickName, email: user.email, name: user.name, surname: user.surname };
                const accessToken = jwt.sign(userObj, process.env.ACCESS_TOKEN_SECRET);
                return res.json({ accessToken:accessToken });
            }
            else{
                return res.status(400).json({ error: "Not Allowed"});
            }
        } catch (error) {
            return res.status(400).json({ error: "Not Allowed"});
        }
    },

    async authenticate(req, res) {
        const authHeader = req.headers['authorization']
        const token =  authHeader && authHeader.split(' ')[1];

        if(!token)
        {
            return res.status(401).send();
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
            if(err)
            {
                return res.status(403).send();
            }
            return res.status(200).json(user)
        })
    },

    async update(req,res) {
        const { nickName, name, surname, email, password, photo } = req.body;
        const { userId }  = req.params;

        const user = await User.findByPk(userId);

        if(!user){
            return res.status(400).json({ error: "User not found"});
        }

        await User.update({ nickName, name, surname, email, password, photo }, { where: { id: userId }})

        return res.json(user);
    }
}