import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";
import "./main.css";

const RoomDescription = () => {
  const [room, setRoom] = useState(null);
  const [activeImg, setActiveImg] = useState("");


  const navigate = useNavigate();

  const { id } = useParams();

  const fetchRoomDetails = async () => {
    try {
      const res = await api.get(`/rooms/${id}`);
      setRoom(res.data);
      setActiveImg(res.data.images[0]);
    } catch (err) {
      console.log("Failed to fetch room details!", err);
    }
  };

  useEffect(() => {
    fetchRoomDetails();
  }, [id]);

  if (!room) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="room-details">

      {/* Image Section */}
      <motion.div
        className="image-section"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img className="main-img" src={activeImg} alt="room" />

        <div className="thumbnail-container">
          {room.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              onClick={() => setActiveImg(img)}
              className={activeImg === img ? "active" : ""}
            />
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="content-section"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{room.type} Room</h1>

        <p className="description">{room.description}</p>

        <div className="info">
          <p><strong>Category:</strong> {room.category}</p>
          <p><strong>Guests:</strong> {room.maxGuests}</p>
          <p><strong>Bed:</strong> {room.bedType}</p>
          <p><strong>Floor:</strong> {room.floor}</p>
          <p><strong>Rating:</strong> ⭐ {room.rating} ({room.reviews})</p>
        </div>

        {/* Amenities */}
        <div className="amenities">
          <h3>Amenities</h3>
          <ul>
            {room.amenities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Booking */}
        <div className="booking">
          <h2>
            ₹{room.price}{" "}
            {room.discount > 0 && (
              <span className="discount">-{room.discount}%</span>
            )}
          </h2>

          <button
            className={`book-btn ${!room.isAvailable ? "disabled" : ""}`}
            disabled={!room.isAvailable}
            onClick={() => navigate('/checkout',{state:{roomId:room.id}})}
          >
            {room.isAvailable ? "Book Now" : "Not Available"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoomDescription;