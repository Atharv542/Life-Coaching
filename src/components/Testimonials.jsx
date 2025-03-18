import { useState } from "react";
import "./styles.css";

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="testimonials" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="section-title">Success Stories</h2>
      
      <div className="video-box">
      <div className="video-border">
        <video 
          className="testimonial-video" 
          controls 
          autoPlay={isHovered} 
          muted
        >
          <source src="/Review.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <div className="video-border">
        <video 
          className="testimonial-video" 
          controls 
          autoPlay={isHovered} 
          muted
        >
          <source src="/testimonial2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <div className="video-border">
        <video 
          className="testimonial-video" 
          controls 
          autoPlay={isHovered} 
          muted
        >
          <source src="/Review.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      
      </div>
    </section>
  );
};

export default Testimonials;


