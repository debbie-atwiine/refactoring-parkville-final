const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

router.use(expressValidator());

//requiring the model so that it can be used
const Regcar = require('../models/regcarModel');


//route for accessing/viewing the signup page
router.get('/regcar', (req, res) => {
   
    res.render('regcar')
});

//route for the post method
router.post('/regcar', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const vehicletype = req.body.vehicletype
    const drivername = req.body.drivername
    const numberplate = req.body.numberplate
    const color = req.body.color
    const time = req.body.time
    const carmodel = req.body.carmodel
    const date = req.body.date
    const phonenumber = req.body.phonenumber
    const parkingmode = req.body.parkingmode


    //Handling errors
    const errors = req.validationErrors()
    if (errors) {
        res.render('regcar')
    }
    else {
        let newRegcar = new Regcar({
            vehicletype: vehicletype,
            drivername : drivername,
            numberplate : numberplate,
            color : color,
            time : time,
            carmodel : carmodel,
            date : date,
            phonenumber : phonenumber,
            parkingmode : parkingmode
        });


        //saving the model
        newRegcar.save((err) => {
            if (err) {
                console.error(err)
                return;
            }
            else {
                req.flash('success', 'You have successfully registered the car')
                console.log('You have saved your data to the database')
                res.redirect('/cartable')
            }
        })

    }


});

module.exports = router;