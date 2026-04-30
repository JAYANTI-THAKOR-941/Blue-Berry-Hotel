import React from "react";
import { motion } from "framer-motion";
import "./pages.css";

const servicesList = [
  { icon: "🛏", title: "Luxury Rooms", desc: "Spacious deluxe rooms and premium suites designed for comfort, elegance, and peaceful relaxation." },
  { icon: "🍽", title: "Fine Dining", desc: "Enjoy delicious cuisines from our master chefs in elegant dining spaces with unforgettable experiences." },
  { icon: "🏊", title: "Swimming Pool & Spa", desc: "Refresh your mind and body with our luxury pool, wellness spa, and rejuvenating treatments." },
  { icon: "💍", title: "Wedding & Events", desc: "Perfect banquet halls and event spaces for weddings, parties, and special celebrations." },
  { icon: "🚗", title: "Free Parking", desc: "Safe and spacious parking with 24/7 security for all hotel guests." },
  { icon: "📶", title: "High-Speed Wi-Fi", desc: "Stay connected with blazing fast and secure internet available throughout the hotel." },
  { icon: "✈️", title: "Airport Pickup", desc: "Comfortable airport transfer services for guests arriving from near and far." },
  { icon: "🧺", title: "Laundry Service", desc: "Quick and premium laundry support during your stay so you always look your best." },
];

const whyUs = [
  "24/7 Room Service",
  "Luxury & Comfortable Stay",
  "Prime Peaceful Location",
  "Professional Hospitality Staff",
  "Fast Check-In & Check-Out",
  "Trusted by Thousands of Guests",
];

const Services = () => {
  return (
    <div className="page-wrapper">

      {/* Banner */}
      <div className="page-hero services-hero">
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Premium Services</h1>
          <p>World-class amenities crafted to make every moment of your stay exceptional</p>
          <div className="hero-gold-line" />
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="pg-section bg-light">
        <div className="pg-container">
          <div className="pg-section-title">
            <h2>What We Offer</h2>
            <p>A complete range of luxury hotel services for your comfort</p>
            <div className="pg-divider" />
          </div>
          <div className="services-pg-grid">
            {servicesList.map((s, i) => (
              <motion.div
                key={i}
                className="spg-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="spg-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
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
            <p>Reasons thousands of guests keep coming back</p>
            <div className="pg-divider" />
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="why-check">✓</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;