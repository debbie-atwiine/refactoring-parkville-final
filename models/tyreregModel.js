const mongoose = require('mongoose');

const tyreregSchema = mongoose.Schema({

 model: {
    type:String,
    required:true
 },
 
 tyreprice:{
     type:String,
     required:true
 },

 tyreservice:{
     type:String,
     required:true,
      
}

});

module.exports = mongoose.model('Tyrereg', tyreregSchema);