import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphRef = useRef(null);

  /*useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        if (paragraphRef.current) {
          paragraphRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [isExpanded]);*/
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);

    // Scroll to the paragraph after a short delay
    /*setTimeout(() => {
      if (paragraphRef.current) {
        paragraphRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);*/
  };

  const fullText = `Hello, I'm Sachin Kaintura—though you might associate my first name with the famous Indian cricketer, I assure you, it wasn’t chosen for that reason! I’m blessed with a beautiful wife, a wonderful daughter, and a charming son, who are my greatest joys and motivation. My journey began in Mumbai, where I completed my studies and embarked on a career in hospitality. Like many Indians, my dream was to provide a better life for my family, and in 2009, I took a leap of faith and moved to New Zealand. As an immigrant and a member of the middle class, I’ve learned the values of hard work, empathy, and authenticity, which have shaped my life.

  For over 20 years, I’ve been part of the hospitality industry, gaining invaluable life experiences. And before you start guessing—yes, I’m still too young to be called “uncle!” However, my real transformation began in 2019, when I was introduced to an MLM company that sparked my journey into mindfulness and personal development. It took me over 20 years to discover my true purpose.
  
  When I look back, I realize that even in 2004, while studying hospitality management, two lessons from my personal development course stuck with me—setting goals and working on oneself. These seeds of wisdom were there all along, but it wasn’t until 2019 that I truly began to understand their impact.
  
  Since then, I’ve been on a mission to help others by sharing the knowledge and wisdom I’ve gained while overcoming stress, anxiety, fear, limiting beliefs, and financial struggles. I’m not sharing this to impress you, but to impress upon you that we often work hard without realizing our true potential. I wish I had started this journey earlier, but now, my purpose is clear: to help others navigate their own challenges. I’m driven by the belief that each of us has a unique gift from God and the potential to live a fulfilling life. By being honest, respecting individual journeys, and guiding people to overcome obstacles, I aim to inspire others to unlock their full potential and achieve their dreams.`;

  const shortText = fullText.split(" ").slice(0, 70).join(" ") + "...";

  return (
    <div className="mx-auto  ">
       <div className="grid grid-cols-1 md:grid-cols-2 px-6 sm:px-16 lg:px-28 bg-[#e7f6f8] gap-12 items-center py-12 sm:py-16">
        {/* Image Section */}
        <img
          src='about11.jpg'
          alt="Professional Coach"
          className="rounded-lg shadow-xl w-full lg:h-[650px] md:h-[550px] sm:[400px] h-[450px] transform hover:scale-105 transition-transform duration-500 animate-fade-in self-start"
        />

        {/* Content Section */}
        <div className="animate-slide-in">
          <h2 className="text-4xl font-bold text-[#105153] mb-6">About Me</h2>

          <p
            ref={paragraphRef}
            className="text-black mb-4 whitespace-pre-line"
          >
            {isExpanded ? fullText : shortText}
          </p>

          <button
            onClick={toggleReadMore}
            className="text-blue-600 cursor-pointer font-semibold underline mb-6 focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8 px-6 sm:px-16 lg:px-28">
        <div className="bg-gray-50 p-6 rounded-lg border-2 md:hover:-translate-y-4 cursor-default border-[#105153] hover:bg-white hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col justify-center">
          <h4 className="font-bold text-[#105153] text-xl mt-2 mb-1 sm:text-2xl lg:mb-1 lg:-mt-8 text-center">My Mission</h4>
          <p className="text-sm sm:text-base text-gray-600">
            I inspire and guide individuals to discover their unique path of self-learning through mindfulness and personal development, empowering them to achieve their personal and family goals.
            <br />
            <strong>“Mindfulness in Personal Development – Cultivating a Stronger You."</strong>
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-2 md:hover:-translate-y-4 cursor-default border-[#105153] hover:bg-white hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col justify-center">
          <h4 className="font-bold text-[#105153] text-xl sm:text-2xl mb-2 text-center">My Vision</h4>
          <p className="text-sm sm:text-base text-gray-600">
          My vision is to empower individuals to unlock their full potential through self-learning, mindfulness, and personal development, enabling them to achieve lasting personal and family growth. I strive to create a world where people are guided by honesty, respect, empathy, and authenticity in their journey toward becoming stronger, more mindful versions of themselves—helping one individual at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
