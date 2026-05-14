import React, { useState } from "react";
import api from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/public/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Us</h2>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <input style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        <input style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
        <textarea style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} rows="5" placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
        <button className="btn-primary" type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
