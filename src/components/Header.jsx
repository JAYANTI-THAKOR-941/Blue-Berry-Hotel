import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('auth-user');
      setShowDropdown(false);
      navigate('/');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <div className='header'>
      <div className="logo"><h1><span>Blue</span>Berry</h1></div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        {/* {user?.email === 'rwgn1.jayanti.rt@gmail.com' &&<Link to='/room-management'>Room Management</Link>} */}
      </div>
      <div className="btn">
        {user ? (
          <div className="profile-menu">
            <img 
              src={user.photoURL || 'https://via.placeholder.com/40'} 
              alt="Profile" 
              className="profile-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => { setShowDropdown(false); navigate('/profile'); }}>Manage Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={()=>navigate('/login')}>Login</button>
        )}
      </div>
    </div>
  )
}

export default Header