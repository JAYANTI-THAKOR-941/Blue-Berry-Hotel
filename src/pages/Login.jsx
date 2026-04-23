import React from "react";
import { motion } from "framer-motion";
import "./main.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-wrapper">

      {/* Left Side */}
      <div className="auth-left">
        <div className="overlay"></div>
        <div className="left-content">
          <h1>Welcome Back</h1>
          <p>Login to access your bookings and enjoy your stay.</p>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="auth-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Login</h2>
        <p>Enter your credentials</p>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;