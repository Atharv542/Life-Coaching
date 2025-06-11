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
            src='MainX.jpg'
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
          <h1 className="text-2xl sm:text-xl md:text-[32px] text-white text-bold italic">
          "Do you find yourself stuck in overthinking, unsure what step to take next?" {" "}
            
          </h1>

      

          <p className="text-sm text-white/80 sm:text-base md:text-xl">
         Maybe you’re putting things off, your dream job, that tough conversation, or even quality time with your family because it all feels too overwhelming. <br/> <span className="font-bold italic text-gray-300 text-[14px]  ">WHAT IF THE CLARITY YOU'RE SEARCHING FOR ISN'T OUT THERE, BUT ALREADY WITHIN YOU?</span> <br/>  Through mindful growth and simple shifts, you can move from analysis paralysis to purposeful action.<br/><span>Let’s start your journey together.</span> 
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

