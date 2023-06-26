const mongoose = require('mongoose');

const {Schema} = mongoose;

/*
модель User
- firstName
- lastName
*- email,
- gender

- favouriteFilms: []

*/

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    favouriteFilms: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;