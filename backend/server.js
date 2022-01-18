const express = require('express');  
const FollowerController = require('./src/controllers/FollowerController');
const UserController = require('./src/controllers/UserController');
const app = express();  
require('./src/database/index');

app.use(express.json())

// UserController
app.post('/users', UserController.createUser);
app.post('/users/:userId', UserController.update);
app.get('/users', UserController.index);


// FollowerController
app.post('/follower/:followerId/follow/:followedId', FollowerController.follow)
app.post('/unfollow/:followerId/follow/:followedId', FollowerController.unfollow)
app.get('/followers/:followerId', FollowerController.index)


// Listen 9090
app.listen(9090)