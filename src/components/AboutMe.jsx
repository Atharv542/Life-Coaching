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
      <h2 className="section-title">About Me</h2>
      <div className="aboutMeBox">
        <img src="/About Me.jpeg" alt="About Me" className="about-image" />
        <div className="about-description">
          <p>
            Hello, I'm Sachin Kaintura—though you might associate my first name
            with the famous Indian cricketer, I assure you, it wasn’t chosen
            for that reason! I’m blessed with a beautiful wife, a wonderful
            daughter, and a charming son, who are my greatest joys and
            motivation. My journey began in Mumbai, where I completed my
            studies and embarked on a career in hospitality. Like many Indians, my dream was to provide a better life for my
            family, and in 2009, I took a leap of faith and moved to New
            Zealand.
          </p>
          {isExpanded && (
            <p>
              However, my real transformation began in 2019, when I was introduced to an MLM company that sparked my journey into
              mindfulness and personal development. It took me over 20 years to
              discover my true purpose. Since then, I’ve been on a mission to help others by sharing the knowledge and
              wisdom I’ve gained while overcoming stress, anxiety, fear, limiting
              beliefs, and financial struggles. I wish I had started this journey earlier, but now, my purpose is clear: to help others navigate their
              own challenges.
            </p>
          )}
          <button className="read-more-btn" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className="mission-vision-section">
        <h3 className="mission-vision-title">My Mission & Vision</h3>
        <p className="mission-vision-text">
          I inspire and guide individuals to discover their unique path of
          self-learning through mindfulness and personal development,
          empowering them to achieve their personal and family goals.
        </p>
        <p className="mission-vision-text">
          My vision is to empower individuals to unlock their full potential
          through self-learning, mindfulness, and personal development,
          enabling them to achieve lasting personal and family growth.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;


