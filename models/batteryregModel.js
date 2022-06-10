const mongoose = require('mongoose');

//creating the schema
const batteryregSchema = mongoose.Schema({

 batterytype: {
    type:String,
    required:true
 },
 
 batterysize:{
     type:String,
     required:true
 }

});

module.exports = mongoose.model('Batteryreg', batteryregSchema);