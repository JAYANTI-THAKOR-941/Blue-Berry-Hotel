import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="logo">BlueBerry Hotel</h2>
          <p>
            Experience luxury and comfort with world-class hospitality.
            Your perfect stay starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Room Booking</li>
            <li>Restaurant</li>
            <li>Spa & Wellness</li>
            <li>Free WiFi</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Ahmedabad, Gujarat</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@blueberryhotel.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 BlueBerry Hotel. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;