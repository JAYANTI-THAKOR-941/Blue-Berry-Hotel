import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./main.css";
import { useNavigate } from "react-router-dom";
import RoomsHero from "../components/RoomsHero";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

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

  return (
    <>
    <RoomsHero/>
      <section className="rooms">
      <div className="room-container">
        {/* Room Card */}
        {rooms.length === 0 ? (
          <h2>No Room Data Available.</h2>
        ) : (
          rooms.map((r) => (
            <div className="room-card" key={r.id}>
              <img
                src={r.images[0]}
                alt="Deluxe Room"
              />

              <div className="room-content">
                <h3>{r.type}</h3>
                <p>
                  {r.description}
                </p>

                <div className="room-footer">
                  <span className="price">₹{r.price} / night</span>
                  <button className="book-btn" onClick={()=>navigate(`/room/${r.id}`)} >View Details</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
    </>
  );
};

export default Rooms;
