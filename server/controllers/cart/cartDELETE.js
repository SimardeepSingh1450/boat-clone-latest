const cartmodel=require('../../model/cartmodel');

const cartDELETE=async(req,res)=>{
    const item=req.params.itemname;
   await cartmodel.deleteOne({itemname:item})
}

module.exports=cartDELETE;