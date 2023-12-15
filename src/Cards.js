import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Cards(props) {

  let navigate = useNavigate()
  function Forward() {
    navigate(`dashboard/${props.data.title}`,{state:props.data})
  }

  return (
    <div className='col mb-3'>
      <div className='card h-100 bg-dark text-white'>
        <img src={props.data.logo} className='card-img-top hgt' alt='Unable to show' />
        <div className='card-body'>
          <h2 className='card-title'>{props.data.title}</h2>
          <h6>Date and Time: {props.data.startdate} to {props.data.enddate},{props.data.time}</h6>
          <h5>Venue: {props.data.venue}</h5>
          <button className='btn btn-warning' onClick={Forward}>Details</button>
        </div>
      </div>
    </div>
  )
}

export default Cards