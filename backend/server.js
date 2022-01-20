const express = require('express');  
const FollowerController = require('./src/controllers/FollowerController');
const MediaController = require('./src/controllers/MediaController');
const ReviewController = require('./src/controllers/ReviewController');
const UserController = require('./src/controllers/UserController');
const app = express();  
require('./src/database/index');

app.use(express.json())
let allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	next();
  }
app.use(allowCrossDomain);

// UserController
app.post('/users', UserController.createUser);
app.post('/users/:userId', UserController.update);
app.get('/users/:userId', UserController.getById);
app.get('/users', UserController.index);


// FollowerController
app.post('/follower/:followerId/follow/:followedId', FollowerController.follow);
app.post('/unfollow/:followerId/follow/:followedId', FollowerController.unfollow);
app.get('/followers/:followerId', FollowerController.index);

// MediaController
app.post('/medias', MediaController.createMedia);
app.post('/medias/:userId', MediaController.update);
app.get('/medias', MediaController.index);
app.get('/medias/:mediaId', MediaController.getById);
app.get('/media/releases', MediaController.releases);
app.get('/media/topcontent', MediaController.topContent);
app.get('/media/search/:searchQuery', MediaController.search);
//app.get('/medias/data', MediaController.createData);

// ReviewController
app.post('/reviews', ReviewController.createReview);
app.get('/reviews/:reviewId', ReviewController.getById);
app.get('/review/user/:userId', ReviewController.getByUserId);
app.get('/review/media/:mediaId', ReviewController.getByMediaId);
app.get('/reviews', ReviewController.index);
app.get('/review/latest', ReviewController.latest);

// Listen 9090
app.listen(9090)