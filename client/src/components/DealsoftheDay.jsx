import React, { useState } from 'react'
import '../assets/Styles/Allitem.css'
import photo1 from '../assets/dealsoftheday/deal1.webp'
import photo2 from '../assets/dealsoftheday/deal2.webp'
import photo3 from '../assets/dealsoftheday/deal3.webp'
import photo4 from '../assets/dealsoftheday/deal4.webp'
import Axios from 'axios'
function DealsoftheDay() {
    const photos=[
        {
            photo:photo1,
            name:'boAt Rockerz 235 V2',
            amount:999,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114"
        },
        {
            photo:photo2,
            name:'boAt Airdopes 101',
            amount:1199,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/101_600x.png?v=1655788494"
        },
        {
            photo:photo3,
            name:'boAt Airdopes 141',
            amount:1399,
         url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_600x.png?v=1657869596"

        },
        {
            photo:photo4,
            name:'boAt Storm',
            amount:2499,
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216"
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
    <section id="dod">
        <br/><br/>
        <h1>Deals of The Day</h1>
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

export default DealsoftheDay