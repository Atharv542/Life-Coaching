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

  const fullText = `You don’t have to have it all figured out to take the first step.
Hi, I’m Sachin Kaintura and while my name might remind you of a famous Indian cricketer, trust me, I’ve been playing a different kind of game—one of purpose, transformation, and inner growth.
I’m a proud husband, a devoted father to a wonderful daughter and a charming son, and someone who has walked the long, winding road of self-discovery. And if you’ve ever felt stuck, overwhelmed, or like there’s something more waiting for you—you’re not alone. That used to be me too.
Where It All Began: The Foundation Years
My journey started in the vibrant city of Mumbai, where I studied hospitality and began my career in the service industry. Like many in India’s middle class, I dreamed of giving my family a better life. That dream led me to take a leap of faith in 2009, when I moved to New Zealand.
As an immigrant, I had to start from scratch. I embraced long hours, financial sacrifices, and the emotional toll of building a life far from home. But through it all, I held onto the values of Honesty, Respect, empathy, and authenticity—qualities that would become the backbone of who I am today.
The Turning Point: Awakening Purpose
Despite spending over two decades in hospitality, something inside me always felt… incomplete. I was doing well, but I wasn’t truly fulfilled.
In 2019, everything changed when I was introduced to a network marketing company that opened the door to mindfulness and personal development. That was the spark. That’s when I started to truly understand what had been missing all along me. My purpose.
I began to shed layers of stress, anxiety, limiting beliefs, and imposter syndrome and in their place, I found a new version of myself: confident, clear, and connected to my deeper calling. Looking back, I realize the seeds were planted long ago. In fact, in 2004, during a hospitality course, I was introduced to goal setting and self-work. I just wasn’t ready to water those seeds until now.
`;

  const shortText = fullText.split(" ").slice(0, 70).join(" ") + "...";

  return (
    <div className="mx-auto  ">
       <div className="grid grid-cols-1 md:grid-cols-2 px-6 sm:px-16 lg:px-28 bg-[#e7f6f8] gap-12 items-center py-12 sm:py-16">
        {/* Image Section */}
        <img
          src='Background.jpeg'
          alt="Professional Coach"
          className="rounded-lg shadow-xl w-full lg:h-[600px] md:h-[450px] sm:[190px] h-[290px] transform hover:scale-105 transition-transform duration-500 animate-fade-in self-start object-cover"
        />

        {/* Content Section */}
        <div className="animate-slide-in">
          <h2 className="text-4xl font-bold text-[#105153] mb-6">About Me</h2>

          <p ref={paragraphRef} className="text-black mb-4 whitespace-pre-line">
  {isExpanded ? (
    <>
      <span className="italic font-bold">"You don’t have to have it all figured out to take the first step."" </span><br /><br />
      Hi, I’m <strong>Sachin Kaintura</strong> and while my name might remind you of a famous Indian cricketer, trust me, I’ve been playing a different kind of game one of <strong> purpose, transformation, and inner growth</strong>.<br /><br />
      I’m a proud husband, a devoted father to a wonderful daughter and a charming son, and someone who has walked the long, winding road of self-discovery. And if you’ve ever felt stuck, overwhelmed, or like there’s something more waiting for you. That used to be me too.<br /><br />

      <strong className="italic">Where It All Began: The Foundation Years</strong><br />
      My journey started in the vibrant city of Mumbai, where I studied hospitality and began my career in the service industry. Like many in India’s middle class, I dreamed of giving my family a better life. That dream led me to take a leap of faith in 2009, when I moved to New Zealand.<br />
      As an immigrant, I had to start from scratch. I embraced long hours, financial sacrifices, and the emotional toll of building a life far from home. But through it all, I held onto the values of <strong>Honesty, Respect, empathy, and authenticity</strong> qualities that would become the backbone of who I am today.<br /><br />

      <strong className="italic">The Turning Point: Awakening Purpose</strong><br />
      Despite spending over two decades in hospitality, something inside me always felt… incomplete. I was doing well, but I wasn’t truly fulfilled.<br /><br />
      In 2019, everything changed when I was introduced to a network marketing company that opened the door to <strong>mindfulness and personal development</strong>. That was the spark. That’s when I started to truly understand what had been missing all along me i.e. <strong>My purpose.</strong><br /><br />
      I began to shed layers of <strong>stress, anxiety, limiting beliefs, and imposter syndrome</strong> and in their place, I found a new version of myself: confident, clear, and connected to my deeper calling. Looking back, I realize the seeds were planted long ago. In fact, in 2004, during a hospitality course, I was introduced to goal setting and self-work. I just wasn’t ready to water those seeds until now.
    </>
  ) : (
    <>
      <span className="italic font-bold">"You don’t have to have it all figured out to take the first step."</span> <br/> <br/> Hi, I’m <strong>Sachin Kaintura</strong> and while my name might remind you of a famous Indian cricketer, trust me, I’ve been playing a different kind of game one of <strong>purpose, transformation</strong>, and inner growth. I’m a proud husband, a devoted father to a wonderful daughter and a charming son, and someone who has walked the long, winding road of <strong>self-discovery</strong>. And if you’ve ever felt stuck, overwhelmed, or like there’s something more waiting for you...
    </>
  )}
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
