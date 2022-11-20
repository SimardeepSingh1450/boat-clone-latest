import { BrowserRouter as Router,Link } from 'react-router-dom';
import {useState} from 'react';
import '../assets/Styles/Login.css'

import Navbar from '../components/Navbar';
import { motion } from "framer-motion"

function App() {
  localStorage.setItem('loggedIn','false');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function loginUser(e){
    e.preventDefault();

   const response= await fetch('https://boatecomm1450.herokuapp.com/api/login',{
    method:'POST',
    headers:{
        'content-Type':'application/json'
      },
    body:JSON.stringify({email,password})
    });

  const data=await response.json();
  
  if(data.user){
    localStorage.setItem('email',email);
    localStorage.setItem('username',data.username)
    localStorage.setItem('token',data.user);
    console.log(data.user);
    alert('Login Succesfull');
    window.location.href='/shop'
    localStorage.setItem('loggedIn','true');
  }else{
    localStorage.setItem('loggedIn','false');
    alert('Please Check your Username and Password')
  }
  console.log(data);
  }


  return (
    <div className="App">
      <Navbar/>
      <div className='mainlogin'>
      <h2><motion.img animate={{x:0}} initial={{x:-200}} transition={{delay:3.5}} className='logo' style={{height:40,marginRight:10}} src={'https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A21TJRUUN4KGV/046bf91a581bf008cbf3b184d8dba8c8.w400.h400.png'}/>Login</h2>
      <form onSubmit={loginUser}>

        <input className='empass' value={email} onChange={(e)=>{setEmail(e.target.value)}}type='email' placeholder="Email"/><br/><br/>
        <input className='empass' value={password} onChange={(e)=>{setPassword(e.target.value)}}type='password' placeholder="Password"/><br/><br/>
        <div className='logreg'>
        <input classname='bttn' type='submit' value='Login'/>
        <button className='bttnfs'><Link style={{textDecoration:'none',color:'black'}} to="/register">Register</Link></button>
        </div>
        
      </form>
      </div>
    </div>
  );
}

export default App;
