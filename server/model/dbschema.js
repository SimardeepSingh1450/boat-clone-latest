const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
    },
   
    
},
{collection:'ecommerce'}
)

const model=mongoose.model('ecomm',Schema);
module.exports=model;