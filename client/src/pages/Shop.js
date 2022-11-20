import React, { useEffect, useRef, useState } from 'react';
import '../assets/Shop.css'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import Navbar from '../components/Navbar';
import photo1 from '../assets/ShopBackPhotos/shopback1.jpg';
import photo2 from '../assets/ShopBackPhotos/shopback2.jpg';
import photo3 from '../assets/ShopBackPhotos/shopback3.jpg';
import photo4 from '../assets/ShopBackPhotos/shopback4.gif';
import {motion} from 'framer-motion';
import BestSeller from '../components/BestSeller';
import DealsoftheDay from '../components/DealsoftheDay';
import Videoad from '../components/Videoad';
import SmartWatches from '../components/SmartWatches';
import Superheroes from '../components/Superheroes';
import Models from '../components/Models';

function Shop() {
  const [start,setStart]=useState(0);
const photosarray=[
  photo1,photo2,photo3,photo4
]
const [current,SetCurrent]=useState(0);

const leftfn=()=>{
  if(current>0){
SetCurrent(current-1);
  }
  else{
SetCurrent(3);
  }
}


const rightfn=()=>{
  if(current>2){
SetCurrent(0);
} else{
SetCurrent(current+1);
}
}

const musicref=useRef();

useEffect(()=>{
musicref.current.play();
},[])

  return (
    <div className='num'>
      <header>
        <Navbar/>
      </header>
      <main style={{marginTop:-30}}>
        <audio ref={musicref} src="https://justzahiphop.com/wp-content/uploads/2020/07/Nathan_Dawe_Ft_KSI_-_Lighter.mp3"/>
      <FaChevronLeft onClick={()=>{leftfn()}} className='arrow' style={{fontSize:60,marginRight:1200}}/>
      <motion.img key={photosarray[current]} animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}} className='backimg' src={photosarray[current]}/>
      <FaChevronRight onClick={()=>{rightfn()}} className='arrow' style={{zIndex:3,marginTop:140,fontSize:60,marginLeft:-80}}/>
      <BestSeller/>
      <DealsoftheDay/>
      <Videoad/>
      <SmartWatches/>
      <Superheroes/>
      <Models/>
     </main>
     <footer>
      <h1 style={{color:"black"}}>
        Made with <AiFillHeart/> by Simardeep Singh Mudhar &copy;
      </h1>
     </footer>
      </div>
  )
}

export default Shop