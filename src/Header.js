import { useNavigate } from 'react-router-dom'
import './App.css'

function Header() {
  
  let navigate = useNavigate()
  function toLogin() {
    navigate('/login')
  }
  return (
    <button className='btn btn-primary right mt-2 mx-5' onClick={toLogin}>Login</button>
  )
}

export default Header