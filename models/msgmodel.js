const mongoose= require('mongoose')

const  msgSchema =new  mongoose.Schema({
    username:String,
    message:String,
    day:String,
    times:String,
}) 

 const msgmodel=mongoose.model('information',msgSchema)
 module.exports=msgmodel