import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';
import { FaHome } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const formRef = useRef();
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_j4ah4kb", 
          "template_1i8b317", 
          formRef.current,
          "qOUTSphaEMIDp4QnT" 
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
<div className="heading-box">
    <FaHome className="home-icon" onClick={()=>{navigate('/')}} />
    <h1 className="main-heading">Life Coaching</h1>
  </div>
 <div className="main-box">
    <div className="contact-box">
      <h2 className="contact-title">Contact Us</h2>
    </div>
    <form ref={formRef} onSubmit={handleSubmit} className="booking-form">
      <label className="entity">Name:</label>
      <input placeholder="Enter Your Name" type="text" name="name" required />

      <label className="entity">Email:</label>
      <input placeholder="Enter Your Email" type="email" name="email" required />

      <label className="entity">Phone:</label>
      <input placeholder="Enter Your Contact No." type="tel" name="phone" required />

      <label className="entity">Message:</label>
      <textarea placeholder="Message" name="message" />

      <button type="submit">Book Appointment</button>
    </form>
  </div>
</div>
  );
};

export default BookingForm;



