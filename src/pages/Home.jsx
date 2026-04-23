import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const Home = () => {
  return (
    <section className="hotel-hero">
      <div className="overlay"></div>

      <div className="hotel-container">
        
        {/* Content */}
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
  );
};

export default Home;