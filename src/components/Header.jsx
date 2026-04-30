import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => { unsubscribe(); window.removeEventListener('scroll', onScroll); };
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

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Rooms' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`bb-header${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <Link to='/' className='bb-logo'>
        <span>Blue</span>Berry Hotel
      </Link>

      {/* Nav */}
      <nav className={`bb-nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Right Side */}
      <div className='bb-header-right'>
        {user ? (
          <div className='bb-profile-wrap'>
            <button
              className='bb-profile-btn'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={user.photoURL || 'https://ui-avatars.com/api/?name=' + user.displayName}
                alt='Profile'
                className='bb-profile-img'
              />
              <span className='bb-profile-name'>{user.displayName?.split(' ')[0]}</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>▼</span>
            </button>

            {showDropdown && (
              <div className='bb-dropdown'>
                <div className='bb-dropdown-user'>
                  <p>{user.displayName}</p>
                  <p>{user.email}</p>
                </div>
                <button onClick={() => { setShowDropdown(false); navigate('/'); }}>🏠 Home</button>
                <button className='logout' onClick={handleLogout}>🚪 Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className='bb-login-btn' onClick={() => navigate('/login')}>
            Sign In
          </button>
        )}

        {/* Burger */}
        <button
          className='bb-burger'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle navigation'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;