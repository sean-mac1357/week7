'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send("Meow!")
});

module.exports = router;