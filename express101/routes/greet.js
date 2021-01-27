'use strict';

const express = require('express'),
    router = express.Router();

// const friendsArray = require('../db')

router.get('/', function(req, res) {
    res.send("Hello, !")
});

// router.get('/Luke', function(req, res) {
//     res.send("Hello, Luke!")
// });
// router.get('/Ahsoka', function(req, res) {
//     res.send("Hello, Ahsoka!")
// });
// router.get('/Han', function(req, res) {
//     res.send("Hello, Han!")
// });    
router.get('/:handle', function(req, res) {
    const { handle } = req.params;
    res.send(`<h1>Hello, ${handle}!</h1>`)
});

module.exports = router;