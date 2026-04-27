import React from 'react'
import './main.css'

const Services = () => {
  return (
    <section className="services-section">

      {/* Banner Section */}
      <div className="services-banner">
        <h1>Our Premium Services</h1>
        <p>
          Experience luxury, comfort, and world-class hospitality at
          Blue Berry Hotel with our premium guest services.
        </p>
      </div>

      {/* Services Cards */}
      <div className="services-container">

        <div className="service-card">
          <div className="service-icon">🛏</div>
          <h2>Luxury Rooms</h2>
          <p>
            Spacious deluxe rooms and premium suites designed for
            comfort, elegance, and peaceful relaxation.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🍽</div>
          <h2>Fine Dining</h2>
          <p>
            Enjoy delicious cuisines, elegant dining spaces,
            and unforgettable food experiences.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🏊</div>
          <h2>Swimming Pool & Spa</h2>
          <p>
            Refresh your mind and body with our luxury pool,
            wellness spa, and relaxing treatments.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">💍</div>
          <h2>Wedding & Events</h2>
          <p>
            Perfect banquet halls and event spaces for weddings,
            parties, and special celebrations.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🚗</div>
          <h2>Free Parking</h2>
          <p>
            Safe and spacious parking with 24/7 security
            for all hotel guests.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📶</div>
          <h2>High-Speed Wi-Fi</h2>
          <p>
            Stay connected with fast and secure internet
            available throughout the hotel.
          </p>
        </div>

      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Blue Berry Hotel?</h2>

        <div className="choose-grid">
          <div className="choose-box">✔ 24/7 Room Service</div>
          <div className="choose-box">✔ Luxury & Comfortable Stay</div>
          <div className="choose-box">✔ Prime Peaceful Location</div>
          <div className="choose-box">✔ Professional Hospitality Staff</div>
          <div className="choose-box">✔ Fast Check-In & Check-Out</div>
          <div className="choose-box">✔ Trusted by Thousands of Guests</div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="extra-services">
        <h2>Additional Guest Facilities</h2>

        <div className="extra-grid">
          <div className="extra-box">
            <h3>Airport Pickup</h3>
            <p>Comfortable airport transfer services for guests.</p>
          </div>

          <div className="extra-box">
            <h3>Conference Rooms</h3>
            <p>Professional meeting spaces for business events.</p>
          </div>

          <div className="extra-box">
            <h3>Laundry Service</h3>
            <p>Quick and premium laundry support during your stay.</p>
          </div>

          <div className="extra-box">
            <h3>Travel Assistance</h3>
            <p>Tour guidance and travel support for your convenience.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Services