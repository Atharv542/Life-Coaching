import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PersonalDevelopment.css";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const images = [
  "https://www.oneeducation.org.uk/wp-content/uploads/2021/04/Personal-Development-768x505.png",
  "https://www.blendcentre.co.uk/wp-content/uploads/2016/07/Personal-Growth-is-Childs-Play.jpg",
  "https://st4.depositphotos.com/1071909/24336/i/450/depositphotos_243364796-stock-photo-coach-motivate-personal-development-success.jpg",
];

const strategiesImages = [
  "https://static.vecteezy.com/system/resources/previews/020/150/435/large_2x/achievement-or-growth-challenge-and-motivation-for-success-concept-achieving-target-or-progress-to-achieve-goals-career-steps-to-success-businessman-climbing-ladder-with-arrows-as-a-way-to-achieve-vector.jpg",
  "https://res.cloudinary.com/zaphyrpro/image/upload/v1699972486/blog/atomic-habits/habit-formation.webp",
  "https://c8.alamy.com/comp/FK3G8J/vector-illustration-of-speech-bubble-positive-thinking-FK3G8J.jpg",
];

const steps = [
  { title: "Define Your Goals", description: "Set clear and actionable goals that align with your vision." },
  { title: "Identify Growth Habits", description: "Find daily habits that contribute to your personal growth." },
  { title: "Take Consistent Action", description: "Small consistent efforts lead to big changes over time." },
  { title: "Review and Improve", description: "Track your progress and make necessary improvements." },
];
const strategies = [
  {
    title: "Goal Setting",
    description:
      "Setting SMART goals that align with your values and vision, empowering you to take consistent steps toward your success and personal growth.",
  },
  {
    title: "Mindset Shifts & Building Habits",
    description:
      "Guiding you through powerful mindset shifts and supporting you in building sustainable habits that transform your beliefs and behaviors, empowering you to create lasting positive change in your life.",
  },
  {
    title: "Self-Reflection & Learning",
    description:
      "Encouraging you to embrace self-reflection and continuous learning, helping you gain deeper insights into your thoughts and actions, so you can grow, adapt, and move forward with clarity and purpose.",
  },
];



const PersonalDevelopment = () => {
  const [index, setIndex] = useState(0);
  const navigate= useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
       <div className="heading-box">
       <FaHome className="home-icon" onClick={()=>{navigate('/')}} />
        <h1 className="main-heading">Life Coaching</h1>
      </div>
      <div className="hero">
  <div className="hero-text">
    <h1>Personal Development</h1>
    <p>
    Personal development coaching is about unlocking your full potential and becoming the best version of yourself. Together, we will identify your core strengths and areas for growth, set meaningful goals, and create a plan to achieve them. Through self-reflection, mindset shifts, and intentional habit-building, you will gain the tools to continuously evolve, overcome limiting beliefs, and break through the mental barriers holding you back. It’s about more than just success—it’s about creating lasting fulfilment and personal growth.
    </p>
    
    <ul className="hero-benefits">
      <li><span className="hero-highlight">Social Growth</span> – How you communicate & focus on effective listening. </li>
      <li><span className="hero-highlight">Spiritual Growth</span> – How to connect yourself on a holistic level & finding inner peace.</li>
      <li><span className="hero-highlight">Emotional Growth</span> – How to develop & manage your feelings. </li>
      <li><span className="hero-highlight" >Physical Growth</span> – How to take control of your body. </li>
    </ul>

    <motion.p
      className="hero-quote"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    >
      "Personal development is the belief that you are worth the effort, time, and energy needed to develop yourself."
    </motion.p>

    <button className="hero-btn" onClick={()=>{navigate('/booking')}}>Start Your Journey</button>
  </div>

  <div className="hero-image">
    <motion.img
      key={index}
      src={images[index]}
      alt="Personal Development"
      className="slider-image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    />
    <div className="progress-bar">
      <motion.div
        className="progress"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  </div>
</div>


      {/* Strategies Section */}
      <motion.div
        className="strategies"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Strategies</h2>
      </motion.div>

      {/* Grid Section */}
      <div className="grid">
      {strategies.map((strategy, i) => (
        <motion.div
          key={i}
          className="grid-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <img src='' alt={strategy.title} className="strategy-icon" />
          <h3>{strategy.title}</h3>
          <p>{strategy.description}</p>
        </motion.div>
      ))}
    </div>

      {/* Timeline Animation - How to Start */}
      <div className="timeline-container">
        <h2>How to Start Your Personal Development Journey?</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-marker">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDevelopment;



