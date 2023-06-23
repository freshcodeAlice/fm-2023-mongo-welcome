const express = require('express');
const bodyParser = express.json();


const app = express();
app.use(bodyParser);


module.exports = app;