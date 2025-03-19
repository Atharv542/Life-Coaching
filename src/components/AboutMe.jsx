import { useState, useEffect } from "react";
import "./styles.css";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`about ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="about-title">About Me</h2>
      <div className="aboutMeBox">
        <img src="/About Me.jpeg" alt="About Me" className="about-image" />
        <div className="about-description">
          <p>
          Hello, I'm Sachin Kaintura—though you might associate my first name with the famous Indian cricketer, I assure you, it wasn’t chosen for that reason! I’m blessed with a beautiful wife, a wonderful daughter, and a charming son, who are my greatest joys and motivation.
My journey began in Mumbai, where I completed my studies and embarked on a career in hospitality. Like many Indians, my dream was to provide a better life for my family, and in 2009, I took a leap of faith and moved to New Zealand. As an immigrant and a member of the middle class, I’ve learned the values of hard work, empathy, and authenticity, which have shaped my life.
For over 20 years, I’ve been part of the hospitality industry, gaining invaluable life experiences. And before you start guessing—yes, I’m still too young to be called “uncle!” However, my real transformation began in 2019, when I was introduced to an MLM company that sparked my journey into mindfulness and personal development.
It took me over 20 years to discover my true purpose. When I look back, I realize that even in 2004, while studying hospitality management, two lessons from my personal development course stuck



          </p>
          {isExpanded && (
            <p>
            with me setting goals and working on oneself. These seeds of wisdom were there all along, but it wasn’t until 2019 that I truly began to understand their impact. Since then, I’ve been on a mission to help others by sharing the knowledge and wisdom I’ve gained while overcoming stress, anxiety, fear, limiting beliefs, and financial struggles. I’m not sharing this to impress you, but to impress upon you that we often work hard without realizing our true potential. I wish I had started this journey earlier, but now, my purpose is clear: to help others navigate their own challenges. I’m driven by the belief that each of us has a unique gift from God and the potential to live a fulfilling life. By being honest, respecting individual journeys, and guiding people to overcome obstacles, I aim to inspire others to unlock their full potential and achieve their dreams.

            </p>
          )}
          <button className="read-more-btn" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className="mission-vision-section">

  <div className="mission-vision-container">
    <div className="mission-box">
      <h4>My Mission</h4>
      <p>
        I inspire and guide individuals to discover their unique path of self-learning through mindfulness and personal development, empowering them to achieve their personal and family goals.
        <br />
        <strong>“Mindfulness in Personal Development – Cultivating a Stronger You."</strong>
      </p>
    </div>
    <div className="vision-box">
      <h4>My Vision</h4>
      <p>
        My vision is to empower individuals to unlock their full potential through self-learning, mindfulness, and personal development, enabling them to achieve lasting personal and family growth. 
        I strive to create a world where people are guided by honesty, respect, empathy, and authenticity in their journey toward becoming stronger, more mindful versions of themselves.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutMe;


