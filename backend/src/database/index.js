const { Sequelize } = require('sequelize');
const config = require('./config/database');

const User = require('../models/User');
const Follower = require('../models/Follower');
const Media = require('../models/Media');
const Review = require('../models/Review');

const connection = new Sequelize(config)

User.init(connection);
Follower.init(connection);
Media.init(connection);
Review.init(connection);

module.exports = connection;