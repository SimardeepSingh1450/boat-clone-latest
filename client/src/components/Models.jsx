import React, { useState } from 'react'
import '../assets/Styles/Models.css'
import photo1 from '../assets/Mod/m1.webp';
import photo2 from '../assets/Mod/m2.webp';
import photo3 from '../assets/Mod/m3.webp';
import photo4 from '../assets/Mod/m4.webp';
import {AiOutlineArrowRight} from 'react-icons/ai'
function Models() {
    const [current,SetCurrent]=useState(0);
    const increasefn=()=>{
        if(current>2){
            SetCurrent(0);
        }
        else{
            SetCurrent(current+1)
        }
    }

    const photos=[
        {
            photo:photo1,
            name:'K L RAHUL',
            desp:'Fierce. Flamboyant. Fearless.',
        },
        {
            photo:photo2,
            name:'RASHMIKA MANDANNA',
            desp:'Radiant. Rebel. Trailblazer.',
        },
        {
            photo:photo3,
            name:'KIARA ADVANI',
            desp:'Bold. Fashionista. Hustler.',
        },
        {
            photo:photo4,
            name:'KARTIK AARYAN',
            desp:'Energetic. Charming. Free Spirit.',
        },

    ]
  return (
    <div className='out1'>
        <div className='out2'>
            <img className='photo' src={photos[current].photo}/>
        </div>
        <div className='out3'>
            <h2 className='desp'><span style={{textDecoration:'underline',textDecorationColor:'red'}}>Meet</span> the bo<span style={{color:'red'}}>A</span>theads</h2>
            <h3 className='desp1'>{photos[current].name}</h3>
            <h2 className='desp3'>{photos[current].desp}</h2>
           
                <button className='arrown' onClick={()=>{increasefn()}}><AiOutlineArrowRight style={{fontSize:50}}/></button>
                
        </div>
    </div>
  )
}

export default Models