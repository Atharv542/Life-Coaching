import './styles.css';
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section className="hero">
      <img src="/Background.jpeg" alt="Life Coaching" className="hero-image" />

      <div className="hero-content">
        {/* Personalized Greeting */}
        <h1 className="hero-greeting">Hey There! I am <span className="highlight-text">Sachin Kaintura</span></h1>

        <h2 className="hero-title">
        Awaken Your <span className="highlight-text">True Potential</span>  & Embrace <span className="highlight-text">Mindful Growth</span>
        </h2>
        <p className="hero-description">
        Discover the power within you to transform your life. Through the powerful combination of personal development and mindfulness, you can cultivate a deeper awareness, unlock your true potential, and create a life filled with purpose and growth
        </p>
        <motion.p
      className="hero-quote"
      initial={{ opacity: 1 }}
      animate={{ opacity: 10 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}>
      "Start your journey toward a balanced, purposeful, and empowered life today!."
    </motion.p>
      <a href="/booking" target="_blank">
          <button className="hero-button">
            Book Your Free Discovery Call
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;



