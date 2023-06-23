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

/*
Завдання: дописати роути + методи контроллера на видалення та апдейт сутності.
Для видалення спробуйте два методи: 
findByIdAndDelete()
findByIdAndRemove()
і знайдіть різницю


*/


module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const updated = await Movie.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send({data: updated});
    }catch(error) {
        next(error);
    }
}


module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const deleted = await Movie.findByIdAndDelete(id);
        console.log(deleted);
        res.status(200).send({deleted});
    }catch(error) {
        next(error);
    }
}


module.exports.getSearchOne = async (req, res, next) => {
    try {
        const {query} = req;
        console.log(query);
        const movie = await Movie.findOne({
            ...query
        });
        res.status(200).send({data: movie})
    } catch(error) {
        next(error)
    }
}

/*
 Знайти фільм за параметрами запиту

*/


module.exports.getSearchAll = async (req, res, next) => {
    try {
        const {query} = req;
        console.log(query);
        const movie = await Movie.find({
            ...query
        });
        res.status(200).send({data: movie})
    } catch(error) {
        next(error)
    }
}