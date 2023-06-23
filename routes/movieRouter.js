const express = require('express');
const MovieController = require('../controllers/Movie.controller');

const movieRouter = express.Router();

movieRouter.post('/', MovieController.createOne); //createOne
movieRouter.get('/', MovieController.getAll); //getAll
movieRouter.get('/:id', MovieController.getOne);

module.exports = movieRouter;