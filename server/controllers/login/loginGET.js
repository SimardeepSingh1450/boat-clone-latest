const jwt=require('jsonwebtoken');
const usermodel=require('../../model/dbschema');

const loginGET=async(req,res)=>{
    try{
    const token=req.headers['x-access-token']
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    const user=await usermodel.findOne({email:email})
    return {status:'ok',user:user}
}catch(err){
    console.log(err);
    res.json({status:'error',error:'invalid token'})
}
}

module.exports=loginGET;