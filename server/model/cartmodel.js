const mongoose=require('mongoose');
const cartschema=new mongoose.Schema({
    username:{
        type:String
    },
    itemname:{
        type:String,
    
    },
    itemprice:{
        type:Number,
    },
    useremail:{
        type:String
    },
    url:{
        type:String
    }
});

module.exports=mongoose.model('cartcollection',cartschema);