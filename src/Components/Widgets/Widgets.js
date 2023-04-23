import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import './Widgets.css';

function Widgets() {
  
  let [data,setdata]=useState({})
  let [location,setlocation]=useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fd439fcd2c48d0f8d85db66f33296310`
  const searchlocation=(event)=>{
    if(event.key==='Enter'){
    axios.get(url).then((response)=>{
      setdata(response.data)
      console.log(response.data)
    })
    setlocation('');
  }
  }
	

	return (
    <div className='widgetback text-center'>
      <div className='container'>
        <h1>Weather</h1>
        <div>
          <input type='text' value={location} onChange={event=>setlocation(event.target.value)} onKeyPress={searchlocation} placeholder='Search Location' className='searchloc'></input>
        </div>
        <h1 className='bold mb-2'>{data.name}</h1>
        <div>
          {data.main ? <h1 className='bold mb-2'>{data.main.temp}°F</h1>:null}
        </div>
        <div className='md-5'>
          {data.weather ? <h3 className='bold '>{data.weather[0].main}</h3> :null}
        </div>
        {data.name !=undefined&&
        <div className='row row-cols-3 footer'>
          <div className='col'>
            <h3>Feels Like</h3>
            {data.main ? <p className='para'>{data.main.feels_like}</p>:null}
          </div>
          <div className='col'>
            <h3>Humidity</h3>
            {data.main ? <p className='para'>{data.main.humidity}</p>:null}
          </div>
          <div className='col'>
            <h3>Wind</h3>
            {data.wind ? <p className='para'>{data.wind.speed}MPH</p>:null}
          </div>
          </div>}
      </div>
    </div>
	);
}

export default Widgets
