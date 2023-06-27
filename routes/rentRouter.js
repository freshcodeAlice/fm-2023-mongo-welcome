const express = require('express');
const RentController = require('../controllers/Rent.controller');

const rentRouter = express.Router();

rentRouter.post('/', RentController.getMovie);
rentRouter.get('/:id', RentController.reviewRent);
rentRouter.put('/:id', RentController.returnMovie);
rentRouter.get('/all', RentController.reviewAll);
rentRouter.get('/user/:userId', RentController.allUsersRents);

module.exports = rentRouter;