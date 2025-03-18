import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", formData);
    alert("Payment Processing...");
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <div className="email-phone-container">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Amount to be Paid</label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <button type="submit" className="pay-now-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
