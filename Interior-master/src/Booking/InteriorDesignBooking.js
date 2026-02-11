
import React, { useState } from "react";
import "./InteriorDesignBooking.css";

const InteriorDesignBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    notes: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hesita-design.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage("Booking submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "",
          preferredDate: "",
          notes: ""
        });
      } else {
        setMessage("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting your booking.");
    }
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Interior Design Consultation Booking</h1>
      <div className="booking-card">
        {message && <p className="booking-message">{message}</p>}
        <form onSubmit={handleSubmit} className="booking-form">
          <label>Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />

          <label>Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Living Room Interior">Living Room Interior</option>
            <option value="Bedroom Design">Bedroom Design</option>
            <option value="Kitchen Renovation">Kitchen Renovation</option>
            <option value="Full Home Design">Full Home Design</option>
          </select>

          <label>Preferred Date</label>
          <input
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />

          <label>Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Any specific preferences or notes?"
          />

          <button type="submit" className="submit-button">
            Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default InteriorDesignBooking;
