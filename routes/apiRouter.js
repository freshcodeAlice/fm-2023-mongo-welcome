const express = require('express');
const movieRouter = require('./movieRouter');

const apiRouter = express.Router();

apiRouter.use('/movies', movieRouter);


module.exports = apiRouter;