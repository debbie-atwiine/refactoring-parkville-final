const mongoose = require('mongoose')

const signupSchema = mongoose.Schema({
 username:{
     type:String,
     required:true

 },
 email:{
     type:String,
     required:true,
     unique: true
 },
password:{
    type:String,
    required:true,
}
})

const Signup = module.exports = mongoose.model('Signup', signupSchema);