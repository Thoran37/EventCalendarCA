import React from 'react'
import { useLocation } from 'react-router-dom'
import './DetailedEvents.css'

function DetailedEvents() {
  let { state } = useLocation()
  return (
    <><div>
      <div>
        <img className='classlogo' src={state.logo} />
      </div>
      <div>
        <h2 className='display-3 text-center'>{state.title}</h2>
      </div>
      <div className='SpecialBox'>
        <h6><b>Date:</b> {state.startdate} to {state.enddate}</h6>
        <h6><b>Time:</b>{state.time}</h6>
        <h6><b>Place:</b>{state.venue}</h6>
        <h5><div className='statereg'><u><b>Join Here:</b>{state.reglink}</u></div>
        </h5>

      </div>
      <div className='Description p-3'>{state.description}<br /><b>Team Size: {state.teamsize} </b> </div>
      <div className='coorlist'>
        <h1>COORDINATORS:</h1>

        <h3>Student coordinators</h3>
        {state.stucor1} <br />
        {state.stucor2} <br />
      </div>
      <div className='fotter'>
        {state.handles}


      </div>
    </div>
    </>
  )
}

export default DetailedEvents