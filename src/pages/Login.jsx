import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

import { auth,provider } from "../firebase";


const Login = () => {

  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  if(user){
    localStorage.setItem('auth-user',JSON.stringify(user));
  }

  const login = async()=>{
    try{
      await signInWithPopup(auth,provider);
      navigate('/');
    }
    catch(err){
      console.log('Failed to login using google.!!',err);
    }
  }


  useEffect(()=>{
    const stop = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
    return ()=>stop();
  },[])

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
        <h2>Welcome Back</h2>
        <p>Sign in to your account</p>

        <div className="google-btn-container">
          <button className="google-login-btn" onClick={login}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;