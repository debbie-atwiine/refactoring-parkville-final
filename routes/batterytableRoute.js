const express = require('express');
const router = express.Router();
const Batteryreg = require('../models/batteryregModel');

router.get('/batterytable', async(req,res)=>{
     
    try {
        const data = await Batteryreg.find({}).sort({$natural:-1});
            res.render('batterytable', {
            batteryregs : data
          
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
