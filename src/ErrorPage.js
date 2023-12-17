import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  let navigate = useNavigate()
  function Home() {
    navigate('')
  }
  return (
    <div className='text-danger display-1'>
      Page Not Found
      Please check the path of the page
      <button className='btn btn-primary' onClick={Home}>Go to Main page</button>
    </div>
  )
}

export default ErrorPage
