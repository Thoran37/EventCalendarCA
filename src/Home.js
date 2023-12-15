import React, { useState, useEffect } from 'react'
import './App.css'
import Cards from './Cards'

function Home() {
  let [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/Events")
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, []);

  return (
    <>
    <u><h1 className='text-center'>Events</h1></u>
    <div className='container-fluid mt-3'>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4" style={{marginRight:"13%"}}>
          {
            events.map((ele, ind) => (
              <Cards data={ele} key={ind} />
            ))
          }
      </div>
    </div>
    </>
  )
}

export default Home