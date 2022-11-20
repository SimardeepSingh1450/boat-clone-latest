import React from 'react'
import Navbar from '../components/Navbar';
import '../assets/Styles/Home.css'
import {BrowserRouter as Router,Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <Navbar/>

      <div className='home-main'>
      <div className='papa'>
        <h2 style={{color:'black'}}>LOGIN / REGISTER</h2>
        <img className='roto' style={{height:120,marginTop:-30}} src="https://play-lh.googleusercontent.com/5T9UcnMRQ7NIIqeo58ZCvG5-qEXkOoHVq6p4F3poPU-vk-9vPKLpXNMjwnfh93e66Mut"/>
        <ul  className='flexer'>
       
            <li><div className='homediv'><Link className='link' to="/login" style={{textDecoration:'none'}}>Login</Link></div></li>
            <li><div className='homediv'><Link className='link' to="/register" style={{textDecoration:'none'}}>Register</Link></div></li>
        </ul>
           <br/>
      </div>
      </div>
          
           </div>
  )
}

export default Home