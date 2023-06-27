const mongoose = require('mongoose');
const db = require('../configs/db.json');
const Movie = require('./Movie');
const User = require('./User');
const Rent = require('./Rent');

const CONFIG = db[process.env.NODE_ENV || "development"]

mongoose.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
.catch((err) => {
    console.log('connect failed');
    process.exit(1);
});


module.exports = {
    Movie,
    User,
    Rent
}