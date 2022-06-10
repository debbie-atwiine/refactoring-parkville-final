const express = require('express');
const router = express.Router();
const Tyrereg = require('../models/tyreregModel');

router.get('/tyretable', async(req,res)=>{
     
    try {
        // helps return all the members in the collection clients
        const data = await Tyrereg.find({}).sort({$natural:-1});
            res.render('tyretable', {
            tyreregs : data
          
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

module.exports = router;
