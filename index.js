const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set express app
const app = express();

// connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initallize routes
app.use('/api', require('./routes/api'));

// Error handling Middlemare
app.use(function(err, req, res, next) {
    // console(error);
    res.status(422).send({ error: err.message })
})


// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Hello 4000 port');
});