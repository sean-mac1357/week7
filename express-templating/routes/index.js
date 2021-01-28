'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home Of Friends App'
        },
        partials: {
            head: 'partials/head',
            body: 'partials/home'
        }
    })
});

module.exports = router;