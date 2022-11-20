const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const usermodel=require('../../model/dbschema');

const loginPOST=async(req,res)=>{
    try{
      const user= await usermodel.findOne({
        email:req.body.email,
       })

       const isPasswordValid=await bcrypt.compare(req.body.password,user.password);
       if(isPasswordValid){
        const token=jwt.sign({
            name:user.name,
            email:user.email,
        },'secret123')

    return res.json({status:'ok',user:token,username:user.name})
       }else{
    return res.json({status:'error',user:false})
       }
       
    }catch(err){
        console.log(err);
    }
}

module.exports=loginPOST;