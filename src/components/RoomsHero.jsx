import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const RoomsHero = () => {
  return (
    <div className="rooms-hero">

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Our Rooms & Suites</h1>
        <p>
          Discover comfort, luxury, and elegance in every stay.  
          Choose from a variety of rooms designed to suit your needs.
        </p>

        <button className="hero-btn">Explore Rooms</button>
      </motion.div>

    </div>
  );
};

export default RoomsHero;