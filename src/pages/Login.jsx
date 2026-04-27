import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./main.css";
import { Link } from "react-router-dom";
import { signInWithPopup ,signOut,onAuthStateChanged} from "firebase/auth";

import { auth,provider } from "../firebase";


const Login = () => {

  const [user,setUser] = useState(null);

  if(user){
    localStorage.setItem('auth-user',JSON.stringify(user));
  }

  const login = async()=>{
    try{
      await signInWithPopup(auth,provider);
      alert('Login successfully');
    }
    catch(err){
      console.log('Failed to login using google.!!',err);
    }
  }
  const logout = async()=>{
    await signOut(auth);
    alert('Logout successfully.');
    localStorage.removeItem('auth-user');
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
        <h2>Login</h2>
        <p>Enter your credentials</p>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>

        <button onClick={login}>Continue With Google</button>
        <button onClick={logout}>Logout</button>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;