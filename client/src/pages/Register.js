import { BrowserRouter as Router,Link } from 'react-router-dom';
import {useState} from 'react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import '../assets/Register.css'
import Navbar from '../components/Navbar';
function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [render,setRender]=useState(false);
  const nav=useNavigate();

  async function registerUser(e){
    e.preventDefault();

   const response= await fetch('https://boatecomm1450.herokuapp.com/api/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
      },
    body:JSON.stringify({name,email,password})
    });

  const data=await response.json();
  localStorage.setItem('hashpass',data.hashpass);
  if(data.status==='ok'){
    nav('/login')
  }
  console.log(data);
  }


const nameSetter=(e)=>{
 setName(e.target.value)
}


  return (
    <div className="App">
        <Navbar/>
      <div className='mainlogin'>
      <h2><motion.img animate={{x:0}} initial={{x:-200}} transition={{delay:3.5}} class='logo' style={{height:40,marginRight:10}} src={'https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A21TJRUUN4KGV/046bf91a581bf008cbf3b184d8dba8c8.w400.h400.png'}/>Register</h2>
      <form onSubmit={registerUser}>
        <input className='empass' value={name} onChange={(e)=>{nameSetter(e)}}type='text' placeholder="Name"/><br/>
        <input className='empass' value={email} onChange={(e)=>{setEmail(e.target.value)}}type='email' placeholder="Email"/><br/>
        <input className='empass' value={password} onChange={(e)=>{setPassword(e.target.value)}}type='password' placeholder="Password"/><br/>
        <div className='logreg'>
       <input classname='bttn' onClick={()=>{setRender(true)}} type='submit' value='Register'/>
       <button className='bttnfs'><Link style={{textDecoration:'none',color:'black'}} to="/login">Login</Link></button>
       </div>
      </form>
      {render?(<h4>Successfully Registered</h4>):(<h4></h4>)}
      </div>
    </div>
  );
}

export default App;
