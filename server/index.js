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

//controllers :
const registerPOST=require('./controllers/register/registerPOST');
const loginPOST=require('./controllers/login/loginPOST');
const loginGET=require('./controllers/login/loginGET');
const shopPOST=require('./controllers/shop/shopPOST');
const cartGET=require('./controllers/cart/cartGET');
const cartDELETE=require('./controllers/cart/cartDELETE');

//register :
app.post('/api/register',registerPOST);
//login :
app.post('/api/login',loginPOST)
app.get('/api/login',loginGET);


//Backend for cart:
//Adding product to Cart:
app.post('/shop',shopPOST);

//Getting cart items info:
app.get('/cart/:email',cartGET);

//Removing items from cart:
app.delete('/cart/:itemname',cartDELETE);

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