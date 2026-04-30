import React, { useEffect, useState } from "react";
import "./main.css";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

const Checkout = () => {
  const location = useLocation();
  const roomId = location.state?.roomId;

  const [room, setRoom] = useState(null);

  const navigate = useNavigate();

  const [form,setForm] = useState({
    roomNumber:"",
    name:"",
    email:"",
    phone:"",
    checkIn:"",
    checkOut:"",
    guests:"",
    paymentMode:"",
    totalNights:0,
    totalAmount:0
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const updatedCheckoutData = {
        ...form,
        roomNumber: room?.roomNumber || "",
        totalAmount : Number(form.totalNights * discountedPrice)
      }
      await api.post('/bookings', updatedCheckoutData);
      alert('Room booked successfully.')
      navigate('/');
    } 
    catch(err){
      console.log('Booking failed.!!',err)
    }
  }

  const fetchRoomDetails = async () => {
    try {
      const res = await api.get(`/rooms/${roomId}`);
      setRoom(res.data);
    } catch (err) {
      console.log("Failed to fetch room details!", err);
    }
  };

  useEffect(() => {
    if (roomId) fetchRoomDetails();
  }, [roomId]);

  const discountedPrice =
    room && Math.floor(room.price - (room.price * room.discount) / 100);

  return (
    <div className="checkout-page">
      
      {/* LEFT SIDE - ROOM DETAILS */}
      <div className="room-details">
        {room ? (
          <>
            <img
              src={room.images?.[0]}
              alt={room.type}
              className="room-image"
            />

            <h3>
              {room.type} - {room.category}
            </h3>

            <p className="room-desc">{room.description}</p>

            <div className="price-box">
              <span className="original">₹{room.price}</span>
              <span className="discount">{room.discount}% OFF</span>
              <h2>
                ₹{discountedPrice} <span>/night</span>
              </h2>
            </div>

            <div className="room-info">
              <p>👥 Max Guests: {room.maxGuests}</p>
              <p>🛏 {room.bedType}</p>
              <p>🏢 Floor: {room.floor}</p>
              <p>⭐ {room.rating} ({room.reviews} reviews)</p>
            </div>

            <div className="amenities">
              <h4>Amenities</h4>
              <ul>
                {room.amenities.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Loading room...</p>
        )}
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="checkout-container">
        <h2>Hotel Checkout</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <input placeholder="Full Name" name="name" value={form.name} onChange={handleChange} />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />

          <label>Check-in</label>
          <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />

          <label>Check-out</label>
          <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />

          <label>Guests</label>
          <input type="number" name="guests" value={form.guests} onChange={handleChange} min="1" />

          <label>Payment Method</label>
          <select name="paymentMode" value={form.paymentMode} onChange={handleChange}>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Pay at Hotel</option>
          </select>

          <div className="summary">
             <label>Number of Nights</label>
            <input type="number" name="totalNights" value={Number(form.totalNights)} onChange={handleChange} />
            <h2>
                ₹{form.totalNights*discountedPrice} <span>/night</span>
              </h2>
          </div>

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;