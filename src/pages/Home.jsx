import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hotel-hero">
        <div className="overlay"></div>

        <div className="hotel-container">
          <motion.div
            className="hotel-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Welcome to Blue Berry Hotel</h1>
            <p>
              Experience luxury, comfort, and world-class hospitality.
              Book your perfect stay with us and enjoy unforgettable moments.
            </p>

            <div className="hotel-buttons">
              <button className="btn primary">Book Now</button>
              <button className="btn secondary">Explore Rooms</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-home">
        <div className="section-container">
          <div className="about-text">
            <h2>About Blue Berry Hotel</h2>
            <p>
              Blue Berry Hotel offers premium luxury rooms, fine dining,
              swimming pool, spa, event halls, and world-class guest services.
              Our mission is to provide every guest with comfort, elegance,
              and unforgettable memories.
            </p>
            <button className="btn primary">Read More</button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-home">
        <div className="section-title">
          <h2>Our Premium Services</h2>
          <p>Luxury services designed for your comfort and relaxation</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Luxury Rooms</h3>
            <p>Elegant deluxe rooms with modern comfort.</p>
          </div>

          <div className="service-card">
            <h3>Fine Dining</h3>
            <p>Premium restaurant with delicious cuisines.</p>
          </div>

          <div className="service-card">
            <h3>Spa & Pool</h3>
            <p>Relaxing swimming pool and wellness spa.</p>
          </div>

          <div className="service-card">
            <h3>Events & Weddings</h3>
            <p>Beautiful banquet halls for special occasions.</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="testimonial-home">
        <div className="section-title">
          <h2>Guest Reviews</h2>
          <p>What our happy guests say about us</p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Amazing hospitality and beautiful rooms. Truly unforgettable!”
            </p>
            <h4>- Priya Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Excellent service, delicious food, and peaceful atmosphere.”
            </p>
            <h4>- Rahul Patel</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Perfect place for family vacations and business meetings.”
            </p>
            <h4>- Neha Verma</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;