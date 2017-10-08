const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');


// get alist of ninjas from db
router.get('/ninjas', function(req, res, next) {
    console.log(req.body);
    Ninja.find({}).then(function(ninja) {
        res.send(ninja);
    });
    // console.log(req.body);
    // Ninja.geoNear({
    //         type: 'Point',
    //         coordinates: [
    //             parseFloat(req.query.lng),
    //             parseFloat(req.query.lat)
    //         ]
    //     }, {
    //         maxDistance: 100000,
    //         spherical: true
    //     })
    //     .then(function(ninja) {
    //         res.send(ninjas);
    //     });
});


// add new ninja
router.post('/ninjas', function(req, res, next) {
    console.log(req.body);
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next);

})

// update ninja
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
            res.send(ninja);
        });
    });
});

// delete specfic ninja
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(
        function(ninja) {
            res.send(ninja);
        });
});

module.exports = router;