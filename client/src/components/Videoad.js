import React, { useState } from 'react'
import '../assets/Videoad.css'
import photo1 from '../assets/videoads/videoimg1.webp'
import photo2 from '../assets/videoads/videoimg2.webp'
import photo3 from '../assets/videoads/videoimg3.webp'
import photo4 from '../assets/videoads/videoimg4.webp'

import videoad1 from '../assets/videoads/videoad1.mp4'
import videoad2 from '../assets/videoads/videoad2.mp4'
import videoad3 from '../assets/videoads/videoad3.mp4'
import videoad4 from '../assets/videoads/videoad4.mp4'


function VideoAd() {
    const photos=[
        {
            photo:photo1,
            name:'boAt Storm Pro',
            amount:'₹ 2999',
            video:videoad1
        },
        {
            photo:photo2,
            name:'boAt Aavante Bar Aaupera',
            amount:"₹ 9999",
            video:videoad2
        },
        {
            photo:photo3,
            name:'boAt Airdopes 141',
            amount:'₹ 1399',
            video:videoad3
        },
        {
            photo:photo4,
            name:'boAt Rockerz 450',
            amount:'₹ 1499',
            video:videoad4
        },
        
    ]
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
    <div className='main'>
        {
            photos.map((item)=>{
                return(
<div className='mulcontainer2'>
    <div className='mulcontainer1'>
        <video muted loop autoPlay width="260">
            <source src={item.video} type="video/mp4"/>
        </video>
              
    </div>
    <div className='detailsad'>
         <div className='small'>
                <img style={{height:50}} src={item.photo}/>
                </div> 
    <h3 style={{color:'black'}}>{item.name}</h3><hr/>
    <h3 style={{color:'red'}}>{item.amount}</h3>
    </div>
    </div>
               )   })
        }
        
    </div>
    </div>
  )
}

export default VideoAd