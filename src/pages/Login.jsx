import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import api from "../services/api";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("auth-user", JSON.stringify(currentUser));
      }
    });
    return () => stop();
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const currentUser = result.user;
      try {
        const { data: existing } = await api.get(`/users?email=${currentUser.email}`);
        if (existing.length === 0) {
          await api.post("/users", {
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            role: "user",
          });
        }
      } catch (dbErr) {
        console.error("DB save error", dbErr);
      }
      navigate("/");
    } catch (err) {
      console.log("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Panel — Decorative */}
      <div className="login-left">
        <div className="login-left-overlay" />
        <motion.div
          className="login-left-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="login-logo">
            <span>Blue</span>Berry Hotel
          </div>
          <h2>Your Perfect Stay Awaits</h2>
          <p>
            Sign in to unlock exclusive deals, manage bookings, and enjoy a
            seamless luxury experience tailored just for you.
          </p>
          <div className="login-left-features">
            <div className="llf-item">✔ Instant Room Booking</div>
            <div className="llf-item">✔ Exclusive Member Discounts</div>
            <div className="llf-item">✔ 24/7 Concierge Support</div>
            <div className="llf-item">✔ Easy Manage Reservations</div>
          </div>
        </motion.div>
      </div>

      {/* Right Panel — Login Form */}
      <motion.div
        className="login-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="login-card">
          <div className="login-card-header">
            <div className="login-icon-wrap">🏨</div>
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue</p>
          </div>

          <div className="login-divider">
            <span>Continue with</span>
          </div>

          <button
            className={`login-google-btn${loading ? " loading" : ""}`}
            onClick={login}
            disabled={loading}
          >
            {loading ? (
              <span className="login-spinner" />
            ) : (
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="login-google-icon"
              />
            )}
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>

          <p className="login-terms">
            By signing in, you agree to our{" "}
            <span onClick={() => navigate("/terms")}>Terms of Service</span>{" "}
            and{" "}
            <span onClick={() => navigate("/privacy-policy")}>Privacy Policy</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;