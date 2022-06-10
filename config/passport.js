//this file handles the authentication process

const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/signupModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    
    //The fields used here should correspond to the way they are written in the schema(models)
    passport.use(new LocalStrategy(function(username, password, done){
      // match username
      let query = { username: username };
      //we pass an error and the name of our model (to cater for both possibilities)
      Signup.findOne(query, function(err, user){
        if(err) throw err;
  
        if(!user) {
          console.log('This user has not been found');
          return done(null, false, { message: 'No user found' });
          
        }
        // Match password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if (err) throw err;
        if(isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    })
 }))

 //serialializing users
 passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Signup.findById(id, function(err, user) {
      done(err, user);
    });
  });
};



  