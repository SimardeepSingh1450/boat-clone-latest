import React, { useState } from 'react'
import '../assets/Styles/Allitem.css'
import photo1 from '../assets/bestsellers/best1.webp'
import photo2 from '../assets/bestsellers/best2.webp'
import photo3 from '../assets/bestsellers/best3.webp'
import photo4 from '../assets/bestsellers/best4.webp'
import Axios from 'axios'

function BestSeller() {


    const photos=[
        {
            photo:photo1,
            name:'boAt Airdopes 131',
            amount:1299,
            productId:'1',
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569"
        },
        {
            photo:photo2,
            name:'boAt Airdopes 141',
            amount:1399,
            productId:'2',
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_600x.png?v=1657869596"
        },
        {
            photo:photo3,
            name:'boAt Rockerz 333',
            amount:1599,
            productId:'3',
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662"
        },
        {
            photo:photo4,
            name:'boAt Watch Wave Lite',
            amount:1799,
            productId:'4',
            url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782"
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
    <section id="bestsellers">
        <br/>
        <h1>Best Sellers</h1>
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

export default BestSeller