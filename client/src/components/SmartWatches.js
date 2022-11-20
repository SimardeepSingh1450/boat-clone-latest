import React, { useState } from 'react'
import '../assets/Allitem.css'
import photo1 from '../assets/smartwatches/smart1.webp'
import photo2 from '../assets/smartwatches/smart2.webp'
import photo3 from '../assets/smartwatches/smart3.webp'
import photo4 from '../assets/smartwatches/smart4.webp'
import Axios from 'axios'

function SmartWatches() {
    const photos=[
        {
            photo:photo1,
            name:'boAt Watch Xtend‌',
            amount:3499,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_400x.png?v=1650387008"
        },
        {
            photo:photo2,
            name:'boAt Watch Wave Pro',
            amount:3299,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_400x.png?v=1647767874"
        },
        {
            photo:photo3,
            name:'boAt Storm',
            amount:2499,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216"
        },
        {
            photo:photo4,
            name:'boAt Wave Connect',
            amount:3999,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_d8db0011-02f7-43d6-9fe7-7a71a9ed86d2_400x.png?v=1654312290"
        },
        
    ]


 const [user,setUser]=useState();
  const [email,setEmail]=useState();
  const [itemnaam,setItemnaam]=useState();
  const [itemPrice,setItemPrice]=useState();
    const [img,setImg]=useState();

  //Adding Item to cart:
  const addtocart=(fromname,amount,imgurl)=>{
    setImg(imgurl)
    setItemPrice(amount);
    setItemnaam(fromname);
    setUser(localStorage.getItem('username'))
    setEmail(localStorage.getItem('email'))

 Axios.post('https://boatecomm1450.herokuapp.com/shop',({name:user,email:email,itemname:itemnaam,itemprice:itemPrice,imageurl:img}))

  }



  return (
    <section id="smart">
        <br/>
        <h1>Smart Watches</h1>
        <br/>
    <div className='main'>
        {
            photos.map((item)=>{
                return(
<div className='multicontainer2'>
    <div className='multicontainer1'>
                <img style={{height:200}} src={item.photo}/>
    </div>
    <div className='details'>
    <h3 style={{color:'black'}}>{item.name}</h3><hr/>
    <h3 style={{color:'red'}}>₹ {item.amount}</h3>
    <button onClick={()=>{addtocart(item.name,item.amount,item.url)}} className='bttn'>ADD TO CART</button>
  
    </div>
    </div>
               )   })
        }
    </div>
    </section>
  )
}

export default SmartWatches