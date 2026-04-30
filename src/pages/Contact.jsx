import React, { useState } from "react";
import { motion } from "framer-motion";
import "./pages.css";

const contactInfo = [
  { icon: "📍", title: "Address", value: "Sector 21, Gandhinagar, Gujarat, India" },
  { icon: "📞", title: "Phone", value: "+91 98765 43210" },
  { icon: "✉️", title: "Email", value: "info@blueberryhotel.com" },
  { icon: "🕒", title: "Working Hours", value: "24/7 Reception & Guest Support" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="page-wrapper">

      {/* Hero Banner */}
      <div className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — reach out for bookings, events, or any assistance</p>
          <div className="hero-gold-line" />
        </motion.div>
      </div>

      {/* Contact Grid */}
      <section className="pg-section bg-light">
        <div className="pg-container">
          <div className="contact-pg-grid">

            {/* Left — Info */}
            <motion.div
              className="contact-pg-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="pg-tag">Get In Touch</span>
              <h2>We're Here to Help</h2>
              <p>
                Blue Berry Hotel is always ready to serve you with the best hospitality
                experience. Feel free to contact us anytime — day or night.
              </p>
              <div className="contact-info-cards">
                {contactInfo.map((c, i) => (
                  <div key={i} className="cic-card">
                    <div className="cic-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="contact-pg-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Send Us a Message</h3>
              {sent && (
                <div className="form-success">
                  ✅ Message sent! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="cpg-form">
                <div className="cpg-row">
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="Your Full Name" required
                  />
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="Email Address" required
                  />
                </div>
                <div className="cpg-row">
                  <input
                    type="text" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="Phone Number"
                  />
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange} rows="5"
                  placeholder="Write your message here..."
                  required
                />
                <button type="submit" className="pg-gold-btn full-width">
                  Send Message ✉️
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;