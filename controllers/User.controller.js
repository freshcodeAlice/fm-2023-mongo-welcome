const {User} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const user = await User.create(body);
        res.status(201).send({data: user});
    } catch(error) {
        next(error)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundUser = await User.findById(id).populate('favouriteFilms');
        res.status(200).send({data: foundUser});
    } catch(error) {
        next(error)
    }
}


module.exports.getAll = async(req, res, next) => {
    try {
        const foundUsers = await User.find({}).populate('favouriteFilms');
        res.status(200).send({data: foundUsers});
    } catch(error) {
        next(error)
    }
}

/*
Реалізувати додавання фільму до списку улюблених

*/


module.exports.addMovieToFavourite = async (req, res, next) => {
    try {
        const {params: {userId, movieId}} = req;
        const updated = await User.updateOne({
            _id: userId
        }, {
            $addToSet: {
                favouriteFilms: movieId
            }
        });

       res.status(200).send({data: updated})
    } catch(error) {
        next(error)
    }
}