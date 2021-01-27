'use strict';

const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', function(req, res) {
    let htmlData = `<ul>`;

    friendsArray.map(function(friend) {
        htmlData += `<li>${friend.name}</li>`
    })
    htmlData += `</ul>`
    res.send(htmlData)
});

module.exports = router;