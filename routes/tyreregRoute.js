const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');


router.use(expressValidator());

//requiring the model so that it can be used
const Tyrereg = require('../models/tyreregModel');


//route for viewing the tyre registration page
router.get('/tyrereg', (req, res) => {
   
    res.render('tyrereg')
});

//route for the post method
router.post('/tyrereg', (req, res) => {
    const model = req.body.model
    const tyreprice = req.body.tyreprice
    const tyreservice = req.body.tyreservice
    
    //Handling errors
    const errors = req.validationErrors()
    if (errors) {
        
        res.render('tyrereg')
    }
    else {
        let newTyrereg = new Tyrereg({
            model: model,
            tyreprice : tyreprice,
            tyreservice : tyreservice
        });


        //saving the model
        newTyrereg.save((err) => {
            if (err) {
                console.error(err)
                return;
            }
            else {
                req.flash('success', 'You have successfully registered the car')
                console.log('You have saved your data to the database')
                res.redirect('/tyretable')
            }
        })

    }


});

module.exports = router;