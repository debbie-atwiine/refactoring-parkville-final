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
    const batterytype = req.body.batterytype
    const batterysize = req.body.batterysize
    
    //Handling errors
    const errors = req.validationErrors()
    if (errors) {
        res.render('batteryreg')
    }
    else {
        let newBatteryreg = new Batteryreg({
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
                req.flash('success', 'You have successfully registered the car')
                console.log('You have saved your data to the database')
                res.redirect('/batterytable')
            }
        })

    }


});

module.exports = router;