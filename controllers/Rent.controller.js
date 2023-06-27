const {Rent, User} = require('../models');

module.exports.getMovie = async (req, res, next) => {
    try {
        const {body: {movieId, userId}} = req;
        const rent = await Rent.create({movie: movieId, user: userId});
        res.status(200).send({data: rent});
    } catch(error) {
        next(error)
    }
}

module.exports.reviewRent = async (req, res, next) => {
    try {
        const {params: {rentId}} = req;
        const rent = await Rent.findById(rentId);
        res.status(200).send({data: rent})
    } catch(error) {
        next(error)
    }
}

module.exports.allUsersRents = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userRents = await Rent.find({
            user: userId,
            status: 'taken'
        });
        res.status(200).send({data: userRents})
    } catch(error) {
        next(error)
    }
}

module.exports.returnMovie = async (req, res, next) => {}


module.exports.reviewAll = async (req, res, next) => {}