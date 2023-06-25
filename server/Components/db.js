const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Moonhive')


const registration=mongoose.model('registration',{
    user_id:String,
    user_name:String,
    user_email:String,
    user_profession:String,
    user_contact:Number,
    user_profile:String,
    user_password:String,
    user_date:String
    
})
const question=mongoose.model('question',{
    id:String,
    name:String,
    question:String,
    img:String,
    date:String
    
})



module.exports={
    registration,question
}