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



/*

Movie

*+ name:string
- genre: array
+ director: string
+ studio: string
*- production: date
- duration: int
- actors: []
- rating: double


*/