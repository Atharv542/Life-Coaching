import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Ensure the image is correctly imported or placed in `public/`
import Background from "/Background.jpeg"; 

function Home() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Book Your Free Discovery Call");

  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth <= 768) {
        setButtonText("Connect Now");
      } else {
        setButtonText("Book Your Free Discovery Call");
      }
    };

    updateButtonText(); // Initial check
    window.addEventListener("resize", updateButtonText); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateButtonText); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="bg-[#105153] opacity-95 text-white min-h-screen flex items-center">
      <div className="mx-auto px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        
        {/* ✅ Image comes first on mobile */}
        <motion.div 
          className="flex justify-center md:order-last"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src='Main52.jpg'
            alt="Life Coaching" 
            className="rounded-lg shadow-2xl w-full h-48 md:h-auto lg:h-auto xl:h-auto sm:max-w-40 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>

        {/* ✅ Text section */}
        <motion.div 
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* ✅ Adjust font sizes dynamically */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-white text-bold italic">
          What if the key to transforming your life was already within you? {" "}
            
          </h1>

      

          <p className="text-sm text-white/80 sm:text-base md:text-lg">
             Step into your journey of mindful growth and personal development—where awareness meets purpose, and potential turns into power. Through simple, yet profound practices, you’ll awaken the strength within to create lasting change and live a life of meaning and growth
          </p>

          {/* ✅ Animated Quote */}
          <motion.p
            className="text-white italic text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Start your journey toward a balanced, purposeful, and empowered life today!"
          </motion.p>

          {/* ✅ Button */}
          <Link to="/booking">
            <button className="bg-white text-[#105153] lg:px-6 px-2 py-2 rounded-sm sm:px-8 md:px-10 lg:py-3 cursor-pointer sm:py-3 lg:rounded-full lg:font-semibold flex items-center justify-center gap-2 hover:bg-teal-50 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto md:mx-0">
            {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;

