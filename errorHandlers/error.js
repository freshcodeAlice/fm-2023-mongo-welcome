const {Error: {ValidationError, CastError}} = require('mongoose');

module.exports.errorHandler = async (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(400).send({errors: `Validation failed. Reason: ${err.errors.name}`});
    }

    if( err instanceof CastError && err.kind === 'ObjectId') {
        return res.status(404).send({errors: `Invalid id for instance`})
    }


    console.log(err);
    res.status(500).send({errors: 'Unknown error'});
}