import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const highlights = [
  { icon: "🛏", title: "Luxury Rooms", desc: "Elegant rooms designed for maximum comfort and relaxation." },
  { icon: "🍽", title: "Fine Dining", desc: "Delicious cuisine with premium restaurant and café services." },
  { icon: "💍", title: "Events & Weddings", desc: "Beautiful banquet halls for weddings and special occasions." },
  { icon: "🕒", title: "24/7 Service", desc: "Professional staff and room service available all day and night." },
];

const reasons = [
  "Comfortable Premium Rooms",
  "Prime Peaceful Location",
  "Fast Booking & Check-In",
  "Free Wi-Fi & Parking",
  "Swimming Pool & Spa",
  "Trusted Guest Satisfaction",
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">

      {/* Hero Banner */}
      <div className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Blue Berry Hotel</h1>
          <p>Where Luxury Meets Comfort and Every Stay Becomes a Beautiful Memory</p>
          <div className="hero-gold-line" />
        </motion.div>
      </div>

      {/* About Content */}
      <section className="pg-section bg-light">
        <div className="pg-container">
          <div className="about-pg-grid">
            <motion.div
              className="about-pg-img"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                alt="Blue Berry Hotel"
              />
            </motion.div>
            <motion.div
              className="about-pg-text"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="pg-tag">Our Story</span>
              <h2>Your Perfect Stay Destination</h2>
              <p>
                Blue Berry Hotel is a premium hospitality destination designed to offer comfort,
                elegance, and exceptional service. Whether visiting for business, family vacations,
                romantic getaways, or special celebrations — we make every moment memorable.
              </p>
              <p>
                Our hotel features luxury rooms, modern interiors, fine dining, event spaces,
                swimming pool facilities, and personalized guest services that create a relaxing
                and unforgettable experience.
              </p>
              <p>
                With a peaceful atmosphere and professional hospitality, Blue Berry Hotel ensures
                every guest feels welcomed, valued, and truly at home.
              </p>
              <button className="pg-gold-btn" onClick={() => navigate("/rooms")}>
                Explore Rooms →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pg-section bg-white">
        <div className="pg-container">
          <div className="pg-section-title">
            <h2>Hotel Highlights</h2>
            <p>Everything you need for the perfect stay</p>
            <div className="pg-divider" />
          </div>
          <div className="highlight-pg-grid">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="highlight-pg-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="hpc-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pg-section bg-dark-navy">
        <div className="pg-container">
          <div className="pg-section-title white">
            <h2>Why Choose Blue Berry Hotel?</h2>
            <p>Reasons our guests always return</p>
            <div className="pg-divider" />
          </div>
          <div className="why-grid">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="why-check">✓</span>
                <span>{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;