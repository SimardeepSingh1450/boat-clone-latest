const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

require('dotenv').config();


require('./config/connection');//Connection to DB Established
const usermodel=require('./model/dbschema');//Login and Register Model
const cartmodel=require('./model/cartmodel');//Cart details model




app.post('/api/register',async(req,res)=>{
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
    
})



app.post('/api/login',async(req,res)=>{
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
})


app.get('/api/login',async(req,res)=>{
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
})


//Backend for cart:
//Adding product to Cart:
app.post('/shop',async(req,res)=>{
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
})

//Getting cart items info:
app.get('/cart/:email',async(req,res)=>{
    const data=await cartmodel.find({useremail:req.params.email})
    res.json({data:data})
    console.log(data);
})

//Removing items from cart:
app.delete('/cart/:itemname',async(req,res)=>{
     const item=req.params.itemname;
    await cartmodel.deleteOne({itemname:item})
})

//Backend for Stripe:
const stripe=require('stripe')("sk_test_51LMnQrSFc1BTTDVIlppweJwHRLvSN1SPivXnURW43xLQkjnSEJ5Ot6tMnx3ZD9mP2S5SMJut27QmIxCwsYbY3BeO00k0C9q4Yd")


app.post('/cart/:email/payment',async(req,res)=>{
    try{
        console.log(req.body.itemname)
       const session=await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        mode:'payment',
        line_items:req.body.items.map((item)=>{
            return {
                price_data:{
                    currency:'inr',
                    product_data:{
                        name:item.itemname
                    },
                    unit_amount:item.itemprice*100
                },
                quantity:1

            }
        }),
        success_url:`http://${process.env.SERVER_URL}/success`,
        cancel_url:`http://${process.env.SERVER_URL}/cancel`,
       })

     res.json({url:session.url})
    }catch(e){
        console.log(e)
        res.status(500).json({error:e.message})
    }
  
})



app.listen(process.env.PORT||1337,()=>{
    console.log('Server is listening on 1337...')
})