import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDescription from './pages/RoomDescription'
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'

const App = () => {
  return (
    <>
      <Header/>

        {/* public routes */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/room/:id' element={<RoomDescription/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      <Footer/>
    </>
  )
}

export default App