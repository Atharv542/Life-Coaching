import { useNavigate } from 'react-router-dom';
import './styles.css';

const Services = () => {

  const navigate= useNavigate();

  return (
    <section className="services">
      <h1 className="section-title">
        Our Services
      </h1>

      <div className="services-grid">
        <div className="service-card">
         <div className='service-img'>
         <img src="/Personal.jpeg" alt="Personal Development" />
         </div>
         <div className='service-div'>
         <h3 className="service-title">Personal Development</h3>
          <p className="service-description">
          Unlocking Your Potential: Transforming Dreams into Achievable Realities.
          </p>
          <button className="know-more-btn" onClick={()=> navigate("/personalDevelopment")}>Know More</button>
         </div>
        </div>

        <div className="service-card">
         <div className='service-img'>
         <img src="/Personal.jpeg" alt="Personal Development" />
         </div>
         <div className='service-div'>
         <h3 className="service-title">Career & Executive Presence </h3>
          <p className="service-description">
          Command Your Success: Cultivating Executive Presence for Leadership Impact. 
          </p>
          <button className="know-more-btn" onClick={()=> navigate("/careerCoaching")}>Know More</button>
         </div>
        </div>

        <div className="service-card">
         <div className='service-img'>
         <img src="/Personal.jpeg" alt="Personal Development" />
         </div>
          <div className='service-div'>
          <h3 className="service-title">Mindfulness and Spiritual</h3>
          <p className="service-description">
          Awaken Your Soul: Cultivating Mindfulness for Spiritual Harmony. 
          </p>
          <button className="know-more-btn" onClick={()=> navigate("/mindfullCoaching")}>Know More</button>
          </div>
          
        </div>
        {/*<div className="service-card">
         <div className='service-img'>
         <img src="/Personal.jpeg" alt="Personal Development" />
         </div>
          
          <h3 className="service-title">Spiritual Coaching</h3>
          <p className="service-description">
            Helping you grow personally 
          </p>
          <button className="know-more-btn" onClick={()=> navigate("/personalDevelopment")}>Know More</button>
        </div>*/}
      </div>
    </section>
  );
};

export default Services;
