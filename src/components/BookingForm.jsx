import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';
import "./styles.css";

const BookingForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_j4ah4kb",  // Replace with your EmailJS service ID
          "template_1i8b317", // Replace with your EmailJS template ID
          formRef.current,
          "qOUTSphaEMIDp4QnT" // Replace with your EmailJS public key
        )
        .then(
          () => {
            toast.success("Congratulations! Your Appointment is booked successfully 🎉", { position: 'bottom-right' });
            formRef.current.reset(); // Clear form after success
          },
          (error) => {
            toast.error("Error in booking appointment. Please try again.", { position: 'bottom-right' });
            console.error(error);
          }
        );
    } else {
      console.error("Form reference is invalid.");
    }
  };

  return (
    <div className="booking-container">
      <div className="main-box">
        <div className="contact-box">
          <h2 className="contact-title">Contact Us ☎️</h2>
        </div>
        <div className="booking-content">
          <img src="/contact.jpg" alt="Life Coaching" className="booking-image" />
          <form ref={formRef} onSubmit={handleSubmit} className="booking-form">
            <label className="entity">Name:</label>
            <input placeholder="Enter Your Name" type="text" name="name" required />

            <label className="entity">Email:</label>
            <input placeholder="Enter Your Email" type="email" name="email" required />

            <label className="entity">Phone:</label>
            <input placeholder="Enter Your Contact No." type="tel" name="phone" required />

            <label className="entity">Preferred Date:</label>
            <input type="date" name="date" required />

            <label className="entity">Preferred Time:</label>
            <select name="time" required>
              <option value="" disabled selected>Select Time</option>
              <option value="10 a.m.">10 a.m.</option>
              <option value="11 a.m.">11 a.m.</option>
              <option value="3 p.m.">3 p.m.</option>
            </select>

            <label className="entity">Message:</label>
            <textarea placeholder="Message" name="message" />

            <button type="submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;



