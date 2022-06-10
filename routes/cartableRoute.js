const express = require('express');
const router = express.Router();
const Regcar = require('../models/regcarModel');

router.get('/cartable', async(req,res)=>{
     
    try {
        // helps return all the members in the collection clients
        const data = await Regcar.find({}).sort({$natural:-1});
        res.render('cartable', {
          regcars : data
          
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
