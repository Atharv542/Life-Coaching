import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const strategies = [
  {
    title: "Developing a Strong Personal Brand",
    description: "Designed for professionals ready to stand out with authenticity. You’ll uncover your strengths, define your values, and build a personal brand that feels true to you and resonates with the world.",
    image: "newest1.jpg",
  },
  {
    title: "Mastering Communication Skills ",
    description: "Designed for those who want to connect with confidence. You’ll master communication by listening deeply, speaking clearly, and building authentic relationships that leave a lasting impact.",
    image: "newest2.jpg",
  },
  {
    title: "Building Emotional Intelligence ",
    description: "Designed for anyone seeking deeper connections and inner strength. You’ll build emotional intelligence through self-awareness, empathy, and emotional balance, so you can navigate life’s challenges with confidence and compassion.",
    image: "newest3.jpg",
  },
];

const CareerRoadmap = [
  "Self-Assessment & Career Goals",
  "Awareness",
  "Overcoming Obstacles & Limiting Beliefs",
  "Goal Setting ",
  "Skill Development & Growth ",
  "Mindset Shift",
];

const CareerCoaching = () => {
  const navigate = useNavigate();

  const [animateCareerRoadmap, setAnimateCareerRoadmap] = useState(false);
  const [animateStrategies, setAnimateStrategies] = useState(false);

  useEffect(() => {
    // Trigger animations on first page load
    setAnimateCareerRoadmap(true);
    setAnimateStrategies(true);
  }, []);
  return (
    <div className="container mx-auto px-6 py-10">
      
      <IoArrowBackCircleOutline 
    className="text-5xl text-teal-700 cursor-pointer -mx-3 mt-14 hidden md:block " 
    onClick={() => navigate(-1)} 
  />
      
      {/* Hero Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-8 ">
        <div className="md:w-1/2 space-y-4 lg:-mt-24">
          <h1 className="text-4xl font-bold mt-8 md:mt-5 text-teal-700">Career & Executive Presence Coaching</h1>
          <p className="md:text-lg text-gray-600">
          Whether you're feeling unfulfilled at work, uncertain about your next step, or struggling with self-doubt, I’ll guide you to gain clarity, uncover your strengths, and create a step-by-step roadmap to a career that excites and empowers you. Together, we’ll silence the overthinking, overcome procrastination, and take confident action toward the career you truly deserve. 
          </p>
          
          <ul className="md:text-lg text-teal-700 list-disc mx-5">
            <li className="font-bold">Clarity & Vision</li>
            <li className="font-bold">Leadership & Professional Development</li>
            <li className="font-bold">Actionable Strategies & Goal Achievements</li>
          </ul>
          <button className="cursor-pointer bg-teal-600 text-white px-6 py-2 mt-3 rounded-md shadow-md hover:bg-teal-700 transition" onClick={() => navigate('/booking')}>Get Started</button>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 hidden md:block"
        >
          <img src="Career52.jpg" alt="Career Coaching" className="rounded-lg shadow-lg w-full h-[500px] mt-10 object-cover" />
        </motion.div>
      </div>

      {/* Strategies Section */}
      <motion.h2 
        className="text-4xl text-teal-700 font-bold mt-16 text-center"
        initial={{ opacity: 0, y: 50 }} 
        animate={animateStrategies ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Stuck to Soaring: Your Next Career Move Starts Here.
      </motion.h2>
      
      {/* Strategies Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {strategies.map((strategy, i) => (
          <motion.div
            key={i}
            className=" bg-white shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={animateStrategies ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={strategy.image} alt={strategy.title} className="w-full rounded-xl h-auto mx-auto" />
            <h3 className="mt-5 text-2xl px-1 font-semibold">{strategy.title}</h3>
            <p className="text-gray-600 text-lg px-6 py-2 mt-2">{strategy.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Career Roadmap */}
      <h2 className="text-4xl font-bold text-teal-700 mt-16 text-center">Career Roadmap</h2>
<div className="flex flex-col items-center mt-8">
  <motion.div
    className="relative border-l-4 border-teal-700 pl-10 space-y-10"
    initial={{ x: "-100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {CareerRoadmap.map((step, index) => (
      <motion.div
        key={index}
        className="relative bg-white p-6 rounded-lg shadow-lg w-60 text-center flex flex-col justify-center items-center border-2 border-teal-700 transform: translateX(-100px)" 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{once:true}}
      >
        {/* Flowchart Connector Line to the Left (except first item) */}
       

        {/* Horizontal connector into the box */}
        { (
          <div className="absolute top-10 left-[calc(50%-160px)] w-10 h-1 bg-teal-700 "></div>
        )}

       

        {/* Step Text */}
        <p className="text-gray-600">{step}</p>
      </motion.div>
    ))}
  </motion.div>
</div>
    </div>
  );
};

export default CareerCoaching;
