const User = require('../models/User');

module.exports = {
    async createUser(req, res){
        const { nickName, name, surname, email, password } = req.body;

        const user = await User.create({ nickName, name, surname, email, password });

        return res.json(user);
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
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