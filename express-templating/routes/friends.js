'use strict';

const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "Friends List App",
            friends: friendsArray
        },
        partials: {
            head: "partials/head",
            body: "partials/friend-list"
        }
    })
});

router.get('/:handle', (req, res) => {
    const { handle } = req.params;
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        }
    });
    if (friend) {
        res.render('template', {
            locals: {
                title: `${friend.name}'s info`,
                friend
            },
            partials: {
                head: "partials/head",
                body: "partials/friend-details"
            }
        });
    }else {
        res.status(404).send(`No friend with that handle, ${handle}. Sorry 😢`)
    }
});

module.exports = router;