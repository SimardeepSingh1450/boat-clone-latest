const cartmodel=require('../../model/cartmodel');

const shopPOST=async(req,res)=>{
    const data=new cartmodel({
        username:req.body.name,
        useremail:req.body.email,
        itemname:req.body.itemname,
        itemprice:req.body.itemprice,
        url:req.body.imageurl
    });
    const result=await data.save();
    res.end();
    console.log('Result of cart is :',result);
}

module.exports=shopPOST;