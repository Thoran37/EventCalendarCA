import React, { useEffect,useState } from 'react'
import AdminCard from './AdminCard'
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {

  let [events, setEvents] = useState([]);
  useEffect(() => {
    async function fun() {
      let res = await fetch('http://localhost:4000/Events')
      let data = await res.json()
      setEvents(data)
    }
    fun()
  },[])
  let navigate = useNavigate()
  function goto () {
    navigate('/register')
  }

  return (
    <div>
      <button className='btn btn-danger fs-3 mx-auto d-block mt-3' onClick={goto}>Add Event</button>
      <div className='container-fluid mt-3'>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
          {
            events.map((ele, ind) => (
              <AdminCard data={ele} key={ind} />
            ))
          }
      </div>
    </div>
    </div>
  )
}
