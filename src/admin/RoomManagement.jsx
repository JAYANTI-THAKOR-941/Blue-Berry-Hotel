import React, { useEffect, useState } from "react";
import "./admin.css";
import api from "../services/api";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);

  const [show,setShow] = useState(false);

  const [roomData, setRoomData] = useState({
    roomNumber: "",
    type: "",
    category: "",
    price: 0,
    discount: 0,
    maxGuests: 0,
    bedType: "",
    floor: 0,
    rating: 0,
    reviews: 0,
    description: "",
    amenities: "",
    images: "",
    checkIn: "",
    checkOut: "",
    createdAt: "",
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRoomData({
      ...roomData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const fetchRooms = async () => {
    try {
      const res = await api.get("/rooms");
      setRooms(res.data);
    } catch (err) {
      console.log("Failed to fetch rooms!", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedRoomData = {
      ...roomData,
      amenities: roomData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),

      images: roomData.images
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),

      price: Number(roomData.price),
      discount: Number(roomData.discount),
      maxGuests: Number(roomData.maxGuests),
      floor: Number(roomData.floor),
      rating: Number(roomData.rating),
      reviews: Number(roomData.reviews),
    };

    try {
      await api.post("/rooms", formattedRoomData);
      alert("Room Added Successfully!");

      setRoomData({
        roomNumber: "",
        type: "",
        category: "",
        price: 0,
        discount: 0,
        maxGuests: 0,
        bedType: "",
        floor: 0,
        rating: 0,
        reviews: 0,
        description: "",
        amenities: "",
        images: "",
        checkIn: "",
        checkOut: "",
        createdAt: "",
        isAvailable: true,
      });

      fetchRooms();
    } catch (err) {
      console.log("Failed to add room!", err);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="admin-header">
        <div className="admin-header-content">
          <h1 className="admin-main-title">Hotel Room Management</h1>
          <p className="admin-sub-title">
            Manage hotel rooms, pricing, availability and guest details with a
            professional admin dashboard.
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="table-section">
        <div className="section-heading">
          <h2>All Room Listings</h2>
          <p>View all available rooms and manage them easily.</p>
        </div>

        <button onClick={()=>setShow(true)}>Add Room</button>
        <table className="room-table">
          <thead>
            <tr>
              <th>Room No</th>
              <th>Type</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Guests</th>
              <th>Bed Type</th>
              <th>Floor</th>
              <th>Rating</th>
              <th>Reviews</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.roomNumber}</td>
                <td>{room.type}</td>
                <td>{room.category}</td>
                <td>₹{room.price}</td>
                <td>{room.discount}%</td>
                <td>{room.maxGuests}</td>
                <td>{room.bedType}</td>
                <td>{room.floor}</td>
                <td>{room.rating}</td>
                <td>{room.reviews}</td>
                <td>{room.isAvailable ? "Yes" : "No"}</td>
                <td className="action-buttons">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Form Section */}
      {show && <section className="form-section">
        <div className="section-heading">
          <h2>Add / Update Room</h2>
          <p>
            Fill in room details carefully to maintain accurate hotel records.
          </p>
        </div>

        <div className="room-container-1">
          <div className="room-card-1">
            <form className="room-form" onSubmit={handleSubmit}>
              <div className="room-grid">
                <div className="room-field">
                  <label>Room Number</label>
                  <input
                    type="text"
                    name="roomNumber"
                    value={roomData.roomNumber}
                    onChange={handleChange}
                    placeholder="101"
                  />
                </div>

                <div className="room-field">
                  <label>Room Type</label>
                  <select
                    name="type"
                    value={roomData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suite</option>
                  </select>
                </div>

                <div className="room-field">
                  <label>Category</label>
                  <input
                    type="text"
                    name="category"
                    value={roomData.category}
                    onChange={handleChange}
                    placeholder="Standard"
                  />
                </div>

                <div className="room-field">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={roomData.price}
                    onChange={handleChange}
                    placeholder="1200"
                  />
                </div>

                <div className="room-field">
                  <label>Discount (%)</label>
                  <input
                    type="number"
                    name="discount"
                    value={roomData.discount}
                    onChange={handleChange}
                    placeholder="10"
                  />
                </div>

                <div className="room-field">
                  <label>Max Guests</label>
                  <input
                    type="number"
                    name="maxGuests"
                    value={roomData.maxGuests}
                    onChange={handleChange}
                    placeholder="2"
                  />
                </div>

                <div className="room-field">
                  <label>Bed Type</label>
                  <input
                    type="text"
                    name="bedType"
                    value={roomData.bedType}
                    onChange={handleChange}
                    placeholder="King Size Bed"
                  />
                </div>

                <div className="room-field">
                  <label>Floor</label>
                  <input
                    type="number"
                    name="floor"
                    value={roomData.floor}
                    onChange={handleChange}
                    placeholder="1"
                  />
                </div>

                <div className="room-field">
                  <label>Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    name="rating"
                    value={roomData.rating}
                    onChange={handleChange}
                    placeholder="4.5"
                  />
                </div>

                <div className="room-field">
                  <label>Reviews</label>
                  <input
                    type="number"
                    name="reviews"
                    value={roomData.reviews}
                    onChange={handleChange}
                    placeholder="150"
                  />
                </div>
              </div>

              <div className="room-field full">
                <label>Description</label>
                <textarea
                  name="description"
                  value={roomData.description}
                  onChange={handleChange}
                  placeholder="Room description here..."
                />
              </div>

              <div className="room-field full">
                <label>Amenities</label>
                <input
                  type="text"
                  name="amenities"
                  value={roomData.amenities}
                  onChange={handleChange}
                  placeholder="WiFi, AC, TV, Room Service"
                />
              </div>

              <div className="room-field full">
                <label>Images URLs</label>
                <textarea
                  name="images"
                  value={roomData.images}
                  onChange={handleChange}
                  placeholder="Enter image URLs separated by commas"
                />
              </div>

              <div className="room-grid">
                <div className="room-field">
                  <label>Check In</label>
                  <input
                    type="text"
                    name="checkIn"
                    value={roomData.checkIn}
                    onChange={handleChange}
                    placeholder="12:00 PM"
                  />
                </div>

                <div className="room-field">
                  <label>Check Out</label>
                  <input
                    type="text"
                    name="checkOut"
                    value={roomData.checkOut}
                    onChange={handleChange}
                    placeholder="11:00 AM"
                  />
                </div>

                <div className="room-field">
                  <label>Created At</label>
                  <input
                    type="date"
                    name="createdAt"
                    value={roomData.createdAt}
                    onChange={handleChange}
                  />
                </div>

                <div className="room-field checkbox">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={roomData.isAvailable}
                    onChange={handleChange}
                  />
                  <label>Room Available</label>
                </div>
              </div>

              <button className="room-btn">Save Room</button>
            </form>
          </div>
        </div>
      </section>}
    </>
  );
};

export default RoomManagement;