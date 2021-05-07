const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    const data = {
        bodyClass: "home"
    }
    res.render('index', data)
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(MoviesFromDB => {
            const data = {
                bodyClass: "movies",
                movies: MoviesFromDB
            };
            res.render('movies', data);
        })
        .catch(err => {
            console.log('An error occured while retrieving movies from the DB: ', err);
            next(err);
        }); 
});

router.get('/movies/:movieId', (req, res, next) => {
    console.log(req.params.movieId)
    Movie.findById(req.params.movieId)
        .then(movieFromDB => {
            const data = {
                bodyClass: "movies",
                movie: movieFromDB
            };
            console.log(data.movie)
            res.render('movie-detail', data);
        })
        .catch(err => {
            console.log('An error occured while retrieving a movie from the DB: ', err);
            next(err);
        });
})

module.exports = router;
