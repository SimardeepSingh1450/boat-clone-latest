import React, { useEffect } from 'react'

function Successfulpayment() {
    useEffect(()=>{
        window.location.href='/shop'
    },[])
  return (
    <div><h1>Payment Succesfull</h1>
    <h2>Thanks for Ordering from Boat</h2>
    </div>
  )
}

export default Successfulpayment