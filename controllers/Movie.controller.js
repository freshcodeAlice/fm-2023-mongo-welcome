const {Movie} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const movieInst = await Movie.create(body);
        console.log(movieInst);
        res.status(201).send({data: movieInst});
    }catch(error) {
        next(error);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.status(201).send({data: movies});
    }catch(error) {
        next(error);
    }
}



module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        /// const idToFind = new ObjectId(id)
        const movie = await Movie.findById(id);
        console.log(movie);
        res.status(200).send({data: movie})
    }catch(error) {
        next(error);
    }
}