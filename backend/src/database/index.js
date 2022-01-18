const { Sequelize } = require('sequelize');
const config = require('./config/database');

const User = require('../models/User');
const Follower = require('../models/Follower');

const connection = new Sequelize(config)

User.init(connection);
Follower.init(connection);

module.exports = connection;