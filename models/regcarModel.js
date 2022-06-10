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

const Regcar = module.exports = mongoose.model('Regcar', regcarSchema);