const express = require('express'),
    router = express.Router();

const moviesModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'List of Movies and Tv-Shows',
            data: moviesModel,
        },
        partials: {
            body: 'partials/movie-list',
        },
    });
});

router.get('/:imdbID', (req, res) => {
    const { imdbID } = req.params;
    const movie = moviesModel.find((movie) => {
        if (movie.imdbID === imdbID) {
            return movie;
        };
    });
    if (movie) {
        res.render('template', {
            locals: {
                title: `${movie.Title}'s info`,
                movie,
            },
            partials: {
                body: 'partials/movie-details',
            },
        });
    } else {
        res.status(404).send(`No movie or show with the imdbID of ${imdbID}. Sorry 😢`)
    }
});

module.exports = router;