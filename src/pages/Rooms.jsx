import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./main.css";
import "./rooms.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const fetchRooms = async () => {
    try {
      const res = await api.get("/rooms");
      setRooms(res.data);
    } catch (err) {
      console.log("Failed to fetch rooms.!!", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const categories = ["All", ...new Set(rooms.map((r) => r.category))];
  const filtered = filter === "All" ? rooms : rooms.filter((r) => r.category === filter);

  return (
    <>
      {/* Hero Banner */}
      <div className="rooms-page-hero">
        <div className="rooms-page-overlay" />
        <motion.div
          className="rooms-page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Our Rooms & Suites</h1>
          <p>Discover luxury, comfort, and elegance tailored for every guest</p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="rooms-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${filter === cat ? " active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <section className="rooms-grid-section">
        <div className="rooms-grid">
          {filtered.length === 0 ? (
            <p className="no-rooms">No rooms found.</p>
          ) : (
            filtered.map((r, i) => (
              <motion.div
                className="room-card-new"
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="rcn-img-wrap">
                  <img src={r.images[0]} alt={r.type} />
                  <span className={`rcn-badge ${r.isAvailable ? "avail" : "unavail"}`}>
                    {r.isAvailable ? "Available" : "Booked"}
                  </span>
                  {r.discount > 0 && (
                    <span className="rcn-discount-tag">{r.discount}% OFF</span>
                  )}
                </div>

                <div className="rcn-body">
                  <div className="rcn-meta">
                    <span className="rcn-category">{r.category}</span>
                    <span className="rcn-rating">⭐ {r.rating}</span>
                  </div>

                  <h3 className="rcn-title">{r.type} Room</h3>
                  <p className="rcn-desc">{r.description}</p>

                  <div className="rcn-amenities">
                    {r.amenities.slice(0, 4).map((a, idx) => (
                      <span key={idx} className="rcn-amenity">✔ {a}</span>
                    ))}
                  </div>

                  <div className="rcn-info-row">
                    <span>👥 {r.maxGuests} guests</span>
                    <span>🛏 {r.bedType}</span>
                    <span>🏢 Floor {r.floor}</span>
                  </div>

                  <div className="rcn-footer">
                    <div className="rcn-price">
                      {r.discount > 0 && (
                        <span className="rcn-original">₹{r.price}</span>
                      )}
                      <span className="rcn-final">
                        ₹{Math.floor(r.price - (r.price * r.discount) / 100)}
                      </span>
                      <span className="rcn-per">/night</span>
                    </div>
                    <button
                      className={`rcn-btn${!r.isAvailable ? " disabled" : ""}`}
                      disabled={!r.isAvailable}
                      onClick={() => navigate(`/room/${r.id}`)}
                    >
                      {r.isAvailable ? "View Details" : "Unavailable"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Rooms;
