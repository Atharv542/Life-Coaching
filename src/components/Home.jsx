import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


// ✅ Import the image correctly (OR place it in the public/ folder)
import Background from "/Background.jpeg"; // Ensure this path is correct

function Home() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#105153] opacity-95 text-white h-screen">
    <div className=" mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center justify-center h-full">
      <div className="animate-slide-in space-y-6 px-20 ">
        {/* Personalized Greeting */}
        <h1 className="text-6xl text-teal-500">
          Hey There! I am{" "}
          <span className="highlight-text">Sachin Kaintura</span>
        </h1>

        <h2 className="text-3xl">
          Awaken Your <span className="highlight-text">True Potential</span> &
          Embrace <span className="highlight-text">Mindful Growth</span>
        </h2>
        <p className="text-lg">
          Discover the power within you to transform your life. Through the
          powerful combination of personal development and mindfulness, you
          can cultivate a deeper awareness, unlock your true potential, and
          create a life filled with purpose and growth
        </p>
        <motion.p
          className="text-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 10 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          "Start your journey toward a balanced, purposeful, and empowered
          life today!."
        </motion.p>
        <a href="/booking" target="_blank">
          <button className="bg-white text-[#105153] px-10 py-3 cursor-pointer rounded-full font-semibold flex items-center gap-2 hover:bg-teal-50 transition-all duration-300 hover:shadow-lg hover:scale-105">
            Book Your Free Discovery Call
          </button>
        </a>
      </div>
      <div className="hidden md:block animate-slide-in">
        <img src="/Background.jpeg" alt="Life Coaching" className="rounded-lg shadow-2xl hover-scale" />
      </div>
    </div>
  </section>
  );
}

export default Home;
