import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { PopupModal } from "react-calendly";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BookingForm = () => {
  const formRef = useRef();
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
        .then(() => {
          toast.success("Your appointment form is submitted! Please select a time slot.");
          formRef.current.reset();
          setCalendlyOpen(true); // Open Calendly modal
        })
        .catch((error) => {
          toast.error("Error in booking appointment. Please try again.");
          console.error(error);
        });

      emailjs
        .sendForm(
          "service_gt2m8ga",
          "template_6wjpyat",
          formRef.current,
          "9VVB2mfBIGm2-ol8-"
        )
        .then(() => {
          console.log("Confirmation email sent");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("Form reference is invalid.");
    }
  };

  const calendlyURL = `https://calendly.com/sachinkaintura-im/30min?name=${encodeURIComponent(
  formData.name
)}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(formData.message)}`;


  return (
    <div className="flex flex-col items-center mt-10 justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg p-8 border-2 border-teal-500 mt-14 w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 text-center">
          Discovery Conversation
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="font-medium text-gray-700">Name:</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-md outline-none"
          />

          <label className="font-medium text-gray-700">Email:</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded-md outline-none"
          />

          <label className="font-medium text-gray-700">Phone:</label>
          <input
            placeholder="Enter Your Contact No."
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 border rounded-md outline-none"
          />

          <label className="font-medium text-gray-700">Message:</label>
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 border rounded-md outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-white rounded-full cursor-pointer hover:bg-teal-600 hover:text-white text-teal-700 p-3 border-2 border-teal-500 font-medium hover:scale-105 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>

      <PopupModal
        url={calendlyURL}
        onModalClose={() => setCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />

      <Toaster position="top-center" />
    </div>
  );
};

export default BookingForm;
 

