const mongoose = require('mongoose');
const {addDays} = require('date-fns');

const rentSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    rentDate: {
        type: Date,
        default: new Date()
    },
    deadline: {
        type: Date,
        default: addDays(new Date(), 10)
    },
    status: {
        type: String,
        enum: ['taken', 'returned', 'failed'],
        default: 'taken'
    }
});

rentSchema.index({movie: 1, user: 1}, {unique: true})

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;