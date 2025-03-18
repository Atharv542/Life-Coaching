import { React, useState } from "react";
import "./Mindfulness.css";

const MindfulnessCoaching = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mindfulness-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Embrace the Present, Transform Your Future</h1>
          <p className="hero-description">
            Discover the power of mindfulness to enhance your well-being and focus. Our sessions
            guide you through practical techniques to bring clarity and balance into your life.
          </p>
          <p className="quote">
            “The present moment is the only time over which we have dominion.” – Thích Nhất Hạnh
          </p>
        </div>
        <img src="/mind.jpg" alt="Mindfulness" className="hero-image" />
      </div>

      {/* Mindfulness Practices Section */}
      <div className="practices-section">
        <h2 className="practices-title">Mindfulness Practices</h2>
        <div className="practices-grid">
  <div className="practice-item">
    <img src="/breath.jpg" alt="Breathing Exercise" className="practice-image" />
    <h3>Breathing Exercises</h3>
    <hr className="divider"/>
    <p>Guided breathing exercises help you stay calm and focused.</p>
    <blockquote>“Just breathe. You are strong enough to handle your challenges.”</blockquote>
  </div>
  <div className="practice-item">
    <img src="/meditation.jpg" alt="Meditation" className="practice-image" />
    <h3>Meditation Tips</h3>
    <hr className="divider"/>
    <p>Meditation tips to enhance mindfulness and inner peace.</p>
    <blockquote>“Meditation is a vital way to purify and quiet the mind.” – Dalai Lama</blockquote>
  </div>
  <div className="practice-item">
    <img src="/mera.jpg" alt="Mindful Activities" className="practice-image" />
    <h3>Mindful Activities</h3>
    <hr className="divider"/>
    <p>Suggestions for mindful activities to improve daily focus.</p>
    <blockquote>“Awareness is the greatest agent for change.” – Eckhart Tolle</blockquote>
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
