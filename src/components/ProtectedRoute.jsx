import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const user = JSON.parse(localStorage.getItem('auth-user'));

    if(!user || user.email !== 'rwgn1.jayanti.rt@gmail.com'){
        return <Navigate to='/' replace />
    }
  return  <Outlet/>
}

export default ProtectedRoute