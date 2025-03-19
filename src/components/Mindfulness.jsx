import { React, useState } from "react";
import "./Mindfulness.css";

const MindfulnessCoaching = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mindfulness-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
        <h1> Mindfullness & Spiritual</h1>
        <p className="hero-description">
          Mindfulness is the practice of staying fully present in the moment, helping you manage stress, improve focus, and enhance your decision-making ability. In our sessions, you will learn tools and techniques to cultivate mindfulness, creating a greater sense of calm and clarity in both your professional and personal life. This awareness allows you to approach challenges with resilience, maintain composure under pressure, and make thoughtful, intentional decisions.
        </p>
        <button className="hero-btn">Get Started</button>
        </div>
        <img src="/mind.jpg" alt="Mindfulness" className="hero-image" />
      </div>

      {/* Mindfulness Practices Section */}
      <div className="practices-section">
        <h2 className="practices-title">Mindfulness Practices</h2>
        <div className="practices-grid">
  <div className="practice-item">
    <img src="/breath.jpg" alt="Breathing Exercise" className="practice-image" />
    <h3>Meditation Practices</h3>
    <hr className="divider"/>
    <p>Can help you cultivate inner peace, increase self-awareness, and clear mental blockages, leading to greater emotional healing and clarity.</p>
  </div>
  <div className="practice-item">
    <img src="/meditation.jpg" alt="Meditation" className="practice-image" />
    <h3>Cultivating Spiritual Connection and Inner Peace </h3>
    <hr className="divider"/>
    <p>As mindful reflection, gratitude, and intentional stillness, to help you align with your true self and experience a deeper sense of harmony in your life.</p>
  </div>
  <div className="practice-item">
    <img src="/mera.jpg" alt="Mindful Activities" className="practice-image" />
    <h3>Emotional healing and energy clearing </h3>
    <hr className="divider"/>
    <p>Emotional healing and energy clearing are essential for overcoming mental barriers like fear, resistance, and limiting beliefs, allowing you to release negative emotions and create space for peace and transformation. </p>
    
  </div>
  </div>
      </div>

      <div className="video-container">
        <video className="mindfulness-video" controls autoPlay={isHovered} muted>
          <source src="/Mindful.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MindfulnessCoaching;
