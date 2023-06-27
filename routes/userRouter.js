const express = require('express');
const UserController = require('../controllers/User.controller');

const userRouter = express.Router();

userRouter.post('/', UserController.createOne); // create
userRouter.get('/:id', UserController.getOne); // getOne
userRouter.get('/', UserController.getAll); // getOne
userRouter.patch('/:userId/:movieId', UserController.addMovieToFavourite);

module.exports = userRouter;


/*
TODO: реалізувати юзерів, які можуть брати фільми напрокат


*/