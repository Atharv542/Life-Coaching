import { motion } from "framer-motion";
import "./CareerCoaching.css";
import { FaHome } from "react-icons/fa";
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
  const navigate= useNavigate();
  return (
    <div className="container">
    <div className="heading-box">
    <FaHome className="home-icon" onClick={()=>{navigate('/')}} />
        <h1 className="main-heading">Life Coaching</h1>
      </div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Career & Executive Presence Coaching</h1>
          <p>
          Career coaching focuses on helping you navigate your professional path, whether you're looking to advance in your current role or pivot to something new. We’ll work on crafting your career vision, developing your skills, and finding alignment between your work and personal values.
          </p>
          
          <p>Executive presence, meanwhile, is about cultivating the leadership qualities that inspire confidence in others—whether you're in a leadership position or working towards one. We’ll focus on enhancing your communication skills, emotional intelligence, decision-making, and overall ability to lead with confidence, authenticity, and impact. Together, we’ll ensure that you present yourself with clarity, authority, and poise in any professional setting.</p>
          <ul className="hero-benefits">
            <li>-	Clarity & Vision</li>
            <li>-	Leadership & Professional Development </li>
            <li>-	Actionable Strategies & Goal Achievements. </li>
          </ul>
          <button className="hero-btn" onClick={()=>{navigate('/booking')}}>Get Started</button>
          <motion.div
            className="quote-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
          
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
        <h1>Strategies for Career Growth</h1>
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
        <h1>Career Roadmap</h1>
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




