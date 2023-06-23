const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    director: String,
    studio: String,
    genre: [String],
    production: {
        type: Date,
        required: true
    },
    duration: Number,
    actors: [String],
    rating: Number,
})

const Movie = mongoose.model('Movie', movieSchema); 

module.exports = Movie;