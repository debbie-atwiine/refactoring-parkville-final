const mongoose = require('mongoose')

//creating the schema
const regcarSchema = mongoose.Schema({

 vehicletype: {
    type:String,
    required:true
 },
 
 drivername:{
     type:String,
     required:true
// the data that is coming in, its a string and required
 },
 numberplate:{
     type:String,
     required:true,
      
},
 color:{
    type:String,
    required:true,
},

time:{
    type:String,
    required:true,
},

carmodel:{
    type:String,
    required:true,
},

date:{
    type:String,
    required:true,
},

phonenumber:{
    type:String,
    required:true,
},

parkingmode:{
    type:String,
    required:true,
}

})

// we are exposing our schema to other files
const Regcar = module.exports = mongoose.model('Regcar', regcarSchema);