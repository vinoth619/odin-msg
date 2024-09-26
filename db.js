

const mongoose=require('mongoose')



let database;
   async function getDatabase(){
    
  await mongoose.connect('mongodb+srv://xbi4gpt:irc26977@cluster0.dacxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DATA BASE CONNECTED")
    })
    .catch((err)=>{
     console.log(err)
    })

   }


   module.exports={getDatabase}