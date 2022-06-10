const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//requiring the model so that it can be used
const Signup = require('../models/signupModel');


//route for accessing/viewing the signup page
router.get('/signup', (req, res) => {
    res.render('signup')
});

//route for the post method
router.post('/signup', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const passwordConfirm = req.body.passwordConfirm


    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('signup')
    }
    else {
        let newSignup = new Signup({
//value(as used in the schema): property(as used in the form as the name of the input type)
            username: username,
            email: email,
            password: password 
        });
        
        //encrypting the password using bcrypt
        bcrypt.genSalt(7, (err, salt) => {
            bcrypt.hash(newSignup.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }
                newSignup.password = hash;

        //saving the model
                newSignup.save( (err)=> {
                    if (err) {
                        console.error(err)
                        return; 
                    }
                    else {
                        //since this is a register page, it should redirect you to the login page
                        req.flash('success', 'You have successfully signed up')
                        console.log('You have saved your data to the database')
                        res.redirect('/login')
                    }
                })


                
            })

         })


        
    }


});

//exposing the route to any file that will need to access it
module.exports = router;