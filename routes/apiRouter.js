const express = require('express');
const movieRouter = require('./movieRouter');

const apiRouter = express.Router();

apiRouter.use('/movie', movieRouter);


module.exports = apiRouter;