import { motion } from "framer-motion";
import "./CareerCoaching.css";

const strategies = [
  {
    title: "Career Planning",
    description: "Map out your professional journey with clear goals and strategies.",
    image: "CareerPlanning.jpeg",
  },
  {
    title: "Skill Development",
    description: "Identify and enhance the skills that will help you excel in your field.",
    image: "Skill.jpeg",
  },
  {
    title: "Networking",
    description: "Build meaningful professional connections that open doors to new opportunities.",
    image: "Netwroking.jpeg",
  },
];

const CareerRoadmap = [
  "Self-Assessment & Career Goals",
  "Skill Development & Certifications",
  "Resume Building & Personal Branding",
  "Networking & Mentorship",
  "Job Applications & Interviews",
  "Landing the Dream Job & Growth",
];

const CareerCoaching = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Career Coaching</h1>
          <p>
            Career coaching helps you navigate your professional journey, whether you're looking for a promotion, a career change, or leadership growth. Let’s align your work with your passions and strengths.
          </p>
          <ul className="hero-benefits">
            <li>🚀 Unlock career growth</li>
            <li>🎯 Develop leadership skills</li>
            <li>💡 Gain clarity and confidence</li>
          </ul>
          <button className="hero-btn">Get Started</button>
          <motion.div
            className="quote-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="quote">“Your career is your business. It’s time to manage it like a CEO.”</p>
            <span>- Dorit Sher</span>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="Career.jpeg" alt="Career Coaching" />
        </motion.div>
      </div>

      {/* Strategies Section */}
      <motion.div
        className="strategies"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Strategies for Career Growth</h2>
      </motion.div>

      {/* Strategies Flip Cards */}
      <div className="grid">
        {strategies.map((strategy, i) => (
          <motion.div
            key={i}
            className="grid-item flip-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={strategy.image} alt={strategy.title} className="strategy-icon" />
                <h3>{strategy.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{strategy.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Career Roadmap Flowchart */}
      <div className="career-roadmap">
        <h2>Career Roadmap</h2>
        <motion.div
          className="roadmap-container"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {CareerRoadmap.map((step, index) => (
            <motion.div 
              key={index} 
              className="roadmap-node"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="step-number">{index + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerCoaching;




