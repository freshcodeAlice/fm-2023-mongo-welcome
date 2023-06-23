const {Error: {ValidationError}} = require('mongoose');

module.exports.errorHandler = async (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(400).send({errors: `Validation failed. Reason: ${err.errors.name}`});
    }

    res.status(500).send({errors: 'Unknown error'});
}