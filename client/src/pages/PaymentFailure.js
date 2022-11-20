import React, { useEffect } from 'react'

function Failurepayment() {
    useEffect(()=>{
        window.location.href='/shop'
    },[])
  return (
    <div><h1>Payment UnSuccessful !</h1>
    <h2>Please Retry</h2>
    </div>
  )
}

export default Failurepayment