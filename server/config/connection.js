const mongoose=require('mongoose');
const connectiontodb=mongoose.connect('mongodb+srv://Simar:simar@ecom.zmp8udb.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    dbName:'ecom'
});
module.exports=connectiontodb;