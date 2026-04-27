import React from 'react'
import './main.css'

const About = () => {
  return (
    <section className="about-section">

      <div className="about-banner">
        <h1>About Blue Berry Hotel</h1>
        <p>
          Where Luxury Meets Comfort and Every Stay Becomes a Beautiful Memory
        </p>
      </div>

      <div className="about-content">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            alt="Blue Berry Hotel"
          />
        </div>

        <div className="about-text">
          <h2>Your Perfect Stay Destination</h2>

          <p>
            Blue Berry Hotel is a premium hospitality destination designed to
            offer comfort, elegance, and exceptional service. Whether you are
            visiting for business, family vacations, romantic getaways, or
            special celebrations, we make every moment memorable.
          </p>

          <p>
            Our hotel features luxury rooms, modern interiors, fine dining,
            event spaces, swimming pool facilities, and personalized guest
            services that create a relaxing and unforgettable experience.
          </p>

          <p>
            With a peaceful atmosphere and professional hospitality, Blue Berry
            Hotel ensures that every guest feels welcomed, valued, and truly at
            home throughout their stay.
          </p>

          <button>Reserve Now</button>
        </div>

      </div>

      <div className="hotel-highlights">

        <div className="highlight-card">
          <h3>Luxury Rooms</h3>
          <p>Elegant rooms designed for maximum comfort and relaxation.</p>
        </div>

        <div className="highlight-card">
          <h3>Fine Dining</h3>
          <p>Delicious cuisine with premium restaurant and café services.</p>
        </div>

        <div className="highlight-card">
          <h3>Events & Weddings</h3>
          <p>Beautiful banquet halls for weddings and special occasions.</p>
        </div>

        <div className="highlight-card">
          <h3>24/7 Service</h3>
          <p>Professional staff and room service available all day and night.</p>
        </div>

      </div>

      <div className="why-choose-us">
        <h2>Why Choose Blue Berry Hotel?</h2>

        <div className="choose-grid">
          <div className="choose-box">✔ Comfortable Premium Rooms</div>
          <div className="choose-box">✔ Prime Peaceful Location</div>
          <div className="choose-box">✔ Fast Booking & Check-In</div>
          <div className="choose-box">✔ Free Wi-Fi & Parking</div>
          <div className="choose-box">✔ Swimming Pool & Spa</div>
          <div className="choose-box">✔ Trusted Guest Satisfaction</div>
        </div>
      </div>

    </section>
  )
}

export default About