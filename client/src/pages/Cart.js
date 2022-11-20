import React, { useEffect, useState } from 'react'
import '../assets/Styles/Maincart.css'
import Navbar from '../components/Navbar';
import Axios from 'axios';
import {AiFillHeart} from 'react-icons/ai'

function Cart() {

const [email,setEmail]=useState(localStorage.getItem('email'));
const [data,setData]=useState([]);
const [item,setItem]=useState('');
const [address,setAddress]=useState('');
const [postalcode,setPostalCode]=useState('');
const [city,setCity]=useState('');
const [state,setState]=useState('');
const [country,setCountry]=useState('');
const [price,setPrice]=useState(0);
const [user,setUser]=useState('');
//Getting User Cart Items details from mongodb:
useEffect(()=>{
 
Axios.get(`https://boatecomm1450.herokuapp.com/cart/${email}`).then((response)=>{
  setData(response.data.data);
})
},[])

console.log(data);
//Deleting Item from Cart
const fetchAgain=()=>{
 
  Axios.get(`https://boatecomm1450.herokuapp.com/cart/${email}`).then((response)=>{
    setData(response.data.data);
  window.location.reload();
})

}

const deletefn=(name)=>{
    Axios.delete(`https://boatecomm1450.herokuapp.com/cart/${name}`)
    console.log('item deleted')

    fetchAgain();
}


//Sending Data to Stripe Backend:
const makepayment=()=>{
  // setUser(localStorage.getItem('username'))
  // setItem(nameofitem)
  // setPrice(amount)

fetch(`https://boatecomm1450.herokuapp.com/cart/${email}/payment`,{
  method:'POST',
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
   items:data
    
  })
})
.then((res)=>{
  if(res.ok)return res.json()
  return res.json().then(json=>Promise.reject(json))
})
.then(({url})=>{
  console.log(url)
  window.location=url
})
.catch((e)=>console.log(e.error))


  
}




  return (
    <div>
        <Navbar/>
      <div className='maincart'>
        <h1>Enter the details below for Delivery of the Product :</h1>
        <input onChange={(e)=>{setAddress(e.target.value)}} style={{width:500}} type='text' placeholder='Enter your Address...'></input><br/>
        <input onChange={(e)=>{setPostalCode(e.target.value)}} style={{width:500}} type='text' placeholder='Enter your Postal Code...'></input><br/>
        <input onChange={(e)=>{setCity(e.target.value)}} style={{width:500}} type='text' placeholder='Enter your City...'></input><br/>
        <input onChange={(e)=>{setState(e.target.value)}} style={{width:500}} type='text' placeholder='Enter your State...'></input><br/>
        <input onChange={(e)=>{setCountry(e.target.value)}} style={{width:500}} type='text' placeholder='Enter your Country...'></input><br/>

        <h1 className='h1cart'>
        Current Items in Cart :
      </h1>

      <div className='align-items-cart'>
{data.map((item)=>{
    return(
        <>
<div className='outermost'>
<div className='bottom'>
<img className='cartphoto' src={item.url}/>
  </div>
  <div className='inner'>
    <h4 style={{color:'white'}}>Name : {item.itemname}</h4>
    <h4 style={{color:'white'}}>Price : ₹ {item.itemprice}</h4>
    <button onClick={()=>{deletefn(item.itemname)}} className='remove'>Remove </button>
    </div>
    </div> 
    </>
    )

    }

)}
</div>

<br/>
<br/>
    <button onClick={()=>{makepayment()}} className='buynow' style={{marginRight:40}}>Checkout Payment</button>
<br/>
<br/>
<br/>

<h1 style={{color:"white"}}>
        Made with <AiFillHeart/> by Simardeep Singh Mudhar &copy;
      </h1>
        <br/>
        <br/>
        <br/>
      </div>
      
      </div>
  )
}

export default Cart