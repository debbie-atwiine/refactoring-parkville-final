const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');

router.use(expressValidator());

//requiring the model so that it can be used
const Batteryreg = require('../models/batteryregModel');

//route for viewing the tyre registration page
router.get('/batteryreg', (req, res) => {
    res.render('batteryreg')
});

//route for the post method
router.post('/batteryreg', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const batterytype = req.body.batterytype
    const batterysize = req.body.batterysize
    
    //Handling errors
    const errors = req.validationErrors()
    if (errors) {
        //in case of an error, remain on signup
        res.render('batteryreg')
    }
    else {
        let newBatteryreg = new Batteryreg({
            //property(as used in the schema): value(as used in the form as the name of the input type)
            batterytype: batterytype,
            batterysize : batterysize
        });


        //saving the model
        newBatteryreg.save((err) => {
            if (err) {
                console.error(err)
                return;
            }
            else {
                //since this is a register page, it should redirect you to the login page
                req.flash('success', 'You have successfully registered the car')
                console.log('You have saved your data to the database')
                res.redirect('/batterytable')
            }
        })

    }


});

//exposing the route to any file that will need to access it
module.exports = router;