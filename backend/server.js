const express = require('express');  
const FollowerController = require('./src/controllers/FollowerController');
const MediaController = require('./src/controllers/MediaController');
const UserController = require('./src/controllers/UserController');
const app = express();  
require('./src/database/index');

app.use(express.json())

// UserController
app.post('/users', UserController.createUser);
app.post('/users/:userId', UserController.update);
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


// Listen 9090
app.listen(9090)