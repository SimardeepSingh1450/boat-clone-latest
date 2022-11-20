const bcrypt=require('bcryptjs');
const usermodel=require('../../model/dbschema');

const registerPOST=async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10)
       const data=new usermodel({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
       });
       const result=await data.save();
        console.log(req.body);
        res.json({status:'ok',hashpass:hashedPassword})
    }catch(err){
        console.log(err);
    }
    
}

module.exports=registerPOST;