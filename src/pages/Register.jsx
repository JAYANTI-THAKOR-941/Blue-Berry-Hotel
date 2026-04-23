import React from "react";
import { motion } from "framer-motion";
import "./main.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-wrapper">

      {/* Left Side */}
      <div className="auth-left">
        <div className="overlay"></div>
        <div className="left-content">
          <h1>BlueBerry Hotel</h1>
          <p>Luxury stays. Comfortable rooms. Memorable experience.</p>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="auth-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Create Account</h2>
        <p>Register to continue</p>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Register</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </motion.div>

    </div>
  );
};

export default Register;