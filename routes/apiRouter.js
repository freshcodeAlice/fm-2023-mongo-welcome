const express = require('express');
const movieRouter = require('./movieRouter');
const userRouter = require('./userRouter');

const apiRouter = express.Router();

apiRouter.use('/movies', movieRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;