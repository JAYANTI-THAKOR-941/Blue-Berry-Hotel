import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className='bb-footer'>
      <div className='bb-footer-grid'>

        {/* Brand */}
        <div className='bb-footer-brand'>
          <span className='bb-logo'><span>Blue</span>Berry Hotel</span>
          <p>
            Experience luxury, comfort, and world-class hospitality.
            Every stay at BlueBerry Hotel is crafted to create
            beautiful, lasting memories.
          </p>
          <div className='bb-footer-socials'>
            <button className='bb-social-btn' title='Facebook'>f</button>
            <button className='bb-social-btn' title='Instagram'>in</button>
            <button className='bb-social-btn' title='Twitter'>𝕏</button>
            <button className='bb-social-btn' title='YouTube'>▶</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className='bb-footer-col'>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/rooms'>Rooms</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className='bb-footer-col'>
          <h4>Legal</h4>
          <ul>
            <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
            <li><Link to='/disclaimer'>Disclaimer</Link></li>
            <li><Link to='/terms'>Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='bb-footer-col bb-footer-contact'>
          <h4>Contact</h4>
          <p><span className='icon'>📍</span> Sector 21, Gandhinagar, Gujarat, India</p>
          <p><span className='icon'>📞</span> +91 98765 43210</p>
          <p><span className='icon'>✉️</span> info@blueberryhotel.com</p>
          <p><span className='icon'>🕒</span> 24/7 Reception & Guest Support</p>
        </div>

      </div>

      <div className='bb-footer-bottom'>
        <p>© 2026 BlueBerry Hotel. All Rights Reserved.</p>
        <div className='bb-footer-bottom-links'>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/terms'>Terms</Link>
          <Link to='/disclaimer'>Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;