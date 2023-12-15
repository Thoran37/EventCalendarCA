import React from 'react'
import AddVolunteers from './AddVolunteers'
import './App.css'

function Cards(props) {

  return (
    <div className='col mb-3'>
      <div className='card h-100 bg-dark text-white'>
        <div className='card-body'>
          <h2 className='card-title'>{props.data.title}</h2>
          <div className='justify-content-evenly d-flex flex-wrap'>
          <AddVolunteers />
          <button className='btn btn-warning m-1' data-bs-toggle="modal" data-bs-target="#display" >Show Volunteers</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cards