const { Sequelize } = require('sequelize');
const config = require('./config/database');

const User = require('../models/User');
const Follower = require('../models/Follower');
const Media = require('../models/Media');

const connection = new Sequelize(config)

User.init(connection);
Follower.init(connection);
Media.init(connection);

module.exports = connection;