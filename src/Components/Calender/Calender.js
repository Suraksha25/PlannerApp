import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
function Calender() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <div >
     
     <div className='calender '>
     <div className='cal1'>
     <div className='row g-0'>
     <div className='col-sm-4 date'>
      <h1 className='display-1 xy'>{date}</h1>
      <h4 className='display-5'>{new Date().toLocaleString("en-US", { month: "long" })}</h4>
      <h3 className='display-5'>{year}</h3>
      
     </div>
     <div className='col-sm-8'>
     <Calendar className=''></Calendar>
     </div>
     </div>
     </div>
     </div>
     
    </div>
  )
}

export default Calender