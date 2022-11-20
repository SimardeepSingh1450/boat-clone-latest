const cartmodel=require('../../model/cartmodel');

const cartGET=async(req,res)=>{
    const data=await cartmodel.find({useremail:req.params.email})
    res.json({data:data})
    console.log(data);
}

module.exports=cartGET;