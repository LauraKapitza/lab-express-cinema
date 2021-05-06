const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    const data = {
        bodyClass: "home"
    }
    res.render('index', data)
});

router.get('/movies', (req, res, next) => {
    const data = {
        bodyClass: "movies"
    }
    res.render('movies', data)

});

module.exports = router;
