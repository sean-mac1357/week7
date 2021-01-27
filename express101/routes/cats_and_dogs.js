'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send("Dogs and cats living together...mass hysteria!!")
});

module.exports = router;