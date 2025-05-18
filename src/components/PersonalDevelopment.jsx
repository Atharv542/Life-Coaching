import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const images = [
  "https://www.oneeducation.org.uk/wp-content/uploads/2021/04/Personal-Development-768x505.png",
  "https://www.blendcentre.co.uk/wp-content/uploads/2016/07/Personal-Growth-is-Childs-Play.jpg",
  "https://st4.depositphotos.com/1071909/24336/i/450/depositphotos_243364796-stock-photo-coach-motivate-personal-development-success.jpg",
];

const strategies = [
  {
    title: "Goal Setting",
    description: "I will help you turn clarity into consistent progress with Life Momentum.",
    img: "/main3.jpg",
  },
  {
    title: "Mindset & Habits",
    description: "I will help you turn fear into fuel and build unshakable self-belief.",
    img: "/main4.jpg",
  },
  {
    title: "Self-Reflection",
    description: "I will help you turn fear into fuel and build unshakable self-belief.",
    img: "main5.jpg",
  },
];

const steps = [
  { title: "Define Your Goals", description: "Set clear and actionable goals that align with your vision." },
  { title: "Identify Growth Habits", description: "Find daily habits that contribute to your personal growth." },
  { title: "Take Consistent Action", description: "Small consistent efforts lead to big changes over time." },
  { title: "Review and Improve", description: "Track your progress and make necessary improvements." },
];

const PersonalDevelopment = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
         <IoArrowBackCircleOutline 
    className="text-5xl text-teal-700 cursor-pointer -mx-3 mt-14 hidden md:block " 
    onClick={() => navigate(-1)} 
  />

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-5">
        <div className="space-y-6 mt-12">
          <h2 className="text-4xl  font-bold text-teal-700">Personal Development</h2>
          <p className="text-gray-700 leading-relaxed">
          As your personal development coach, I help you unlock your full potential and become the best version of yourself. Together, we’ll clarify your goals, shift limiting beliefs, and build habits that lead to real, lasting growth. This is about more than success—it’s about living with purpose, confidence, and fulfilment. Social Growth – How you communicate & focus on effective listening.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li className="font-semibold">✅ Spiritual – You’ll connect within. I’ll guide you. </li>
            <li className="font-semibold">✅ Emotional – You’ll feel clearly. I’ll support you.</li>
            <li className="font-semibold">✅ Physical – You’ll move with purpose. I’ll empower you.</li>
          </ul>
          <motion.p className="text-gray-600 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            "Personal development is the belief that you are worth the effort, time, and energy needed to develop yourself."
          </motion.p>
          <button
            onClick={() => navigate("/booking")}
            className="bg-teal-600 cursor-pointer text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-700 transition"
          >
            Start Your Journey
          </button>
        </div>
        <motion.div className="relative w-full max-h-[400px] hidden md:block">
          <motion.img
          
            src='Personal52.jpg'
            alt="Personal Development"
            className="w-full h-full  rounded-lg shadow-lg "
            initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Strategies Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-6">Unlock Your Potential:  Build Momentum, Confidence & Inner Balance.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((strategy, i) => (
            <motion.div key={i} className="bg-gray-50  rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={strategy.img} alt={strategy.title} className="w-full h-auto rounded-xl mx-auto " />
              {/*<h3 className="text-xl px-6 font-semibold text-gray-800">{strategy.title}</h3>*/}
              <p className="text-gray-600 text-lg px-6">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
 
  <div className="mt-16">
  <h2 className="text-4xl font-bold text-teal-700 text-center mb-8">
   Let’s Transform Your Mindset and Life.
  </h2>
  <div className="relative space-y-6">
    {steps.map((step, index) => (
      <motion.div 
        key={index} 
        className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 shadow-md rounded-lg border border-teal-300" 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: index * 1.2 }} 
        viewport={{ once: true, amount: 0.5 }} 
      >
        <div className="bg-teal-600 text-white w-10 h-10 flex items-center justify-center font-bold rounded-full">
          {index + 1}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
</div>
  );
};

export default PersonalDevelopment;
