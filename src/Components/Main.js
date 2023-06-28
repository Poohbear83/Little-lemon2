import React from 'react'
import BookingForm from './BookingForm'
import { useState } from 'react';




const Main = () => {
  const {availableTimes, setavailableTimes}=useState("false");
  return (
    <Main>
<BookingForm value={availableTimes} onChange={e=>setavailableTimes(e.target.value)}/>
    </Main>
  )
}

export default Main


