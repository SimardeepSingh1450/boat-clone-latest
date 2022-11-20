import React, { useState } from 'react'
import '../assets/Allitem.css'
import photo1 from '../assets/heroes/dc1.webp'
import photo2 from '../assets/heroes/dc2.webp'
import photo3 from '../assets/heroes/dc3.webp'
import photo4 from '../assets/heroes/dc4.webp'
import Axios from 'axios'

function SuperHeroes() {
    const photos=[
        {
            photo:photo1,
            name:'Airdopes 131 DC Edition',
            amount:1399,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_e269db64-c847-4f30-b904-ccb4d973ae52_400x.png?v=1655526604"
        },
        {
            photo:photo2,
            name:'Rockerz 450 DC edition',
            amount:1499,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_4_400x.png?v=1655534211"
        },
        {
            photo:photo3,
            name:'Rockerz 450 - Batman DC',
            amount:1499,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_3_f3ee5c27-4f14-4159-9fb2-dc60e7d6ec66_600x.png?v=1655536230"
        },
        {
            photo:photo4,
            name:'Stone 190 DC Edition',
            amount:1299,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-2_500x.png?v=1655534170"
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
    <section id="hero">
        <br/>
        <h1>boAt | Superheroes</h1>
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

export default SuperHeroes