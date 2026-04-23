import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className="logo"><h1><span>Blue</span>Berry</h1></div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className="btn">
        <button onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Header