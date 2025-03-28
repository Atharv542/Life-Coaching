import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BookingForm = () => {
  const formRef = useRef();
  const navigate = useNavigate();

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
            toast.success("Congratulations! Your Appointment is booked successfully 🎉");
            formRef.current.reset(); // Clear form after success
          },
          (error) => {
            toast.error("Error in booking appointment. Please try again.");
            console.error(error);
          }
        );
    } else {
      console.error("Form reference is invalid.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 justify-center min-h-screen bg-gray-100 p-6">
      

      <div className="bg-white  rounded-lg p-8 border-2 border-teal-500 mt-14 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Discovery conversation
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="font-medium text-gray-700">Name:</label>
          <input 
            placeholder="Enter Your Name" 
            type="text" 
            name="name" 
            required 
            className="w-full p-2 border rounded-md  outline-none"
          />

          <label className="font-medium text-gray-700">Email:</label>
          <input 
            placeholder="Enter Your Email" 
            type="email" 
            name="email" 
            required 
            className="w-full p-2 border rounded-md  outline-none"
          />

          <label className="font-medium text-gray-700">Phone:</label>
          <input 
            placeholder="Enter Your Contact No." 
            type="tel" 
            name="phone" 
            required 
            className="w-full p-2 border rounded-md  outline-none"
          />

          <label className="font-medium text-gray-700">Message:</label>
          <textarea 
            placeholder="Message" 
            name="message"
            className="w-full p-2 border rounded-md  outline-none resize-none"
          />

          <button 
            type="submit"
            className="w-full bg-white rounded-full cursor-pointer hover:bg-teal-500 hover:text-white text-teal-500 p-3 border-2 border-teal-500 font-medium hover:scale-105 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default BookingForm;
