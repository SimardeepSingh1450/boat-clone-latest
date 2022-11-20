import React, { useState,useEffect } from 'react'
import '../assets/Styles/Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import pic from '../assets/boatlogo.jpg'
import { motion } from "framer-motion"
import {AiOutlineDown} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {BrowserRouter as Router} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';
function Navbar() {
  const loggedIn=localStorage.getItem('loggedIn');
  const [email,setEmail]=useState(localStorage.getItem('email'));
  
  const gotocart=()=>{
    window.location.href=`/cart/${email}`
  }

  const logoutfn=()=>{
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
    window.location.href='/'
  }

  return (
<div>
      <AppBar className='bar' style={{marginBottom:30,height:70,background:'black',marginLeft:0}} position='sticky' color='primary'>
        <Toolbar >
        <motion.img initial={{x:900}} animate={{x:0}} transition={{delay:0.5}} style={{height:50,marginTop:1,marginLeft:7}} src={pic}/>
  
  {(loggedIn==='true')?(<div class="dropdown">
   <Link to="/shop"><button style={{marginRight:0}} class="dropbtn">Shop<AiOutlineDown style={{height:15,marginLeft:10}}/></button></Link>
  <div class="dropdown-content">
    <Link smooth to="#bestsellers"><a href="#">Best Sellers</a></Link>
    <Link smooth to="#dod"><a href="#">Deals of the Day</a></Link>
    <Link smooth to="#smart"><a href="#">Smart Watches</a></Link>
    <Link smooth to="#hero"><a href="#">boAt | Superheroes</a></Link>
  </div>
</div>
):(<></>)}
    
    {(loggedIn==='true')?(<button style={{background:'none',border:'none'}} onClick={()=>{gotocart()}}><FaShoppingCart className='user' style={{marginLeft:24,marginTop:5,color:'red',fontSize:17}}/></button>):(<></>) }
    {(loggedIn==='true')?(<button class='dropbtn' onClick={()=>{logoutfn()}} style={{marginLeft:30}}>Logout</button>):(<></>) }
       
      
</Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar