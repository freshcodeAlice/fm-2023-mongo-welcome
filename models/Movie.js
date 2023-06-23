const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required field for movie']
    },
    director: String,
    studio: String,
    genre: [String],
    production: {
        type: Date,
        required: true
    },
    duration:{
        type: Number,
        validate: {
            validator: function (v) {
                return v > 0
            }
        }
    },
    actors: [String],
    rating: {
        type: Number,
        min: [0, 'Russian filmes banned'],
        max: 10
    },
})

const Movie = mongoose.model('Movie', movieSchema); 

module.exports = Movie;