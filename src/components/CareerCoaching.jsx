import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const strategies = [
  {
    title: "Developing a Strong Personal Brand",
    description: "Identify and articulate your unique strengths and values, guiding you in creating a powerful personal brand that authentically represents who you are and resonates with your audience.",
    image: "CareerPlanning.jpeg",
  },
  {
    title: "Mastering Communication Skills ",
    description: "Master communication skills by enhancing your ability to listen actively, speak with clarity, and connect authentically, empowering you to build stronger relationships and influence others effectively.",
    image: "Skill.jpeg",
  },
  {
    title: "Building Emotional Intelligence ",
    description: "Develop emotional intelligence by improving your self-awareness, empathy, and emotional regulation, enabling you to navigate challenges with greater resilience and build stronger, more meaningful relationships.",
    image: "Netwroking.jpeg",
  },
];

const CareerRoadmap = [
  "Self-Assessment & Career Goals",
  "Awareness",
  "Overcoming Obstacles & Limiting Belief",
  "Goal Setting ",
  "Skill development & Growth ",
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
      
      
      {/* Hero Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold  text-teal-700">Career & Executive Presence Coaching</h1>
          <p className="text-gray-600">
            Career coaching focuses on helping you navigate your professional path, whether you're looking to advance in your current role or pivot to something new.
          </p>
          <p className="text-gray-600">
            Executive presence is about cultivating the leadership qualities that inspire confidence in others.
          </p>
          <ul className="text-teal-700 list-disc mx-5">
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
          className="md:w-1/2"
        >
          <img src="Career.jpeg" alt="Career Coaching" className="rounded-lg shadow-lg w-full h-[550px] mt-14 object-cover" />
        </motion.div>
      </div>

      {/* Strategies Section */}
      <motion.h2 
        className="text-3xl text-teal-700 font-semibold mt-16 text-center"
        initial={{ opacity: 0, y: 50 }} 
        animate={animateStrategies ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Strategies for Career Growth
      </motion.h2>
      
      {/* Strategies Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {strategies.map((strategy, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={animateStrategies ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={strategy.image} alt={strategy.title} className="w-full h-auto mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">{strategy.title}</h3>
            <p className="text-gray-600 mt-2">{strategy.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Career Roadmap */}
      <h2 className="text-3xl font-semibold mt-16 text-center">Career Roadmap</h2>
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
