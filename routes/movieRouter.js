const express = require('express');
const MovieController = require('../controllers/Movie.controller');

const movieRouter = express.Router();

movieRouter.post('/', MovieController.createOne); //createOne
movieRouter.get('/', MovieController.getAll); //getAll
movieRouter.get('/id/:id', MovieController.getOne);
movieRouter.put('/:id', MovieController.updateOne);
movieRouter.delete('/:id', MovieController.deleteOne);
movieRouter.get('/search/', MovieController.getSearchOne); /// ?name=Taxi Driver
movieRouter.get('/search/all/', MovieController.getSearchAll); /// ?name=Taxi Driver

module.exports = movieRouter;