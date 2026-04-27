import React from 'react'
import './main.css'

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-banner">
        <h1>Contact Blue Berry Hotel</h1>
        <p>
          We would love to hear from you. Reach out for bookings,
          events, reservations, or any assistance.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Blue Berry Hotel is always ready to serve you with the best
            hospitality experience. Feel free to contact us anytime.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Sector 21, Gandhinagar, Gujarat, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>✉ Email</h3>
            <p>info@blueberryhotel.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>24/7 Reception & Guest Support</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Your Email Address" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
            <textarea
              rows="5"
              placeholder="Write Your Message Here..."
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact