import { useNavigate } from 'react-router-dom';
import './styles.css';

const Services = () => {

  const navigate= useNavigate();

  return (
    <section className="services">
      <h2 className="section-title">
        Our Services <span className="main-icon">🏢</span>
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <img src="/Personal.jpeg" alt="Personal Development" />
          <h3 className="service-title">Personal Development</h3>
          <p className="service-description">
            Helping you grow personally.
          </p>
          <button className="know-more-btn" onClick={()=> navigate("/personalDevelopment")}>Know More</button>
        </div>

        <div className="service-card">
          <img src="/Carrer.jpeg" alt="Career Coaching" />
          <h3 className="service-title">Career Coaching</h3>
          <p className="service-description">
            Guidance to help you advance in your career.
          </p>
          <button className="know-more-btn"onClick={()=> navigate("/careerCoaching")}>Know More</button>
        </div>

        <div className="service-card">
          <img src="/Home2.jpeg" alt="Confidence Building" />
          <h3 className="service-title">Confidence Building</h3>
          <p className="service-description">
            Boost your self-esteem and achieve more.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>

        <div className="service-card">
          <img src="/Goal.jpeg" alt="Goal Setting" />
          <h3 className="service-title">Goal Setting</h3>
          <p className="service-description">
            Create achievable goals and stick to them.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
