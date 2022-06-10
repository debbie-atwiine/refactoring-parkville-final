const express = require('express');
const router = express.Router();
const passport = require('passport');

//accessing the login page
router.get('/login', (req, res) => {
    res.render('login')
});

//defining the route for processing the data from the login form
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
        })
        (req, res, next);
    } 
);

module.exports = router;