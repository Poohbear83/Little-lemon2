import React from 'react'
import { useState } from 'react'

const BookingForm = ({availableTimes}) => {
    const {Amount, setAmount}=useState ("0");


    const handleSubmit=(e)=>{
        e.preventDefault();
    }


  return (
    <form style={{display:"grid; max-width:200px; gap: 20px"}} onSubmit={handleSubmit} >
      <h1 style={{color:'gold', fontSize:'16px'}}>Reserve a Table</h1>
        <div>
       <label htmlFor='res-date'>date</label>
         <input type='date' id='res-date'></input>
      </div>
      <div>
        <label htmlFor='res-time'>choose time</label>
        <select id='res-time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
        </select>
      </div>
      <div>
        <label htmlFor='guests'>number of guests</label>
        <input type='number'id='number_of_guests'name='number_of_guests' value={Amount} onChange={e=>setAmount(e.target.value)}min={1} max={12}></input>
      </div>
      <div>
        <label htmlFor='ocassion'>ocassion</label>
        <select type= "select" name='ocassion' id='ocassion'>
            <option>Birthday</option>
            <option>Other</option>
            <option>Annivesary</option>

        </select>
      </div>
      <div>
        <button aria-label="on click" type='submit'>submit reservation</button>
      </div>
    </form>
  )
}

export default BookingForm
