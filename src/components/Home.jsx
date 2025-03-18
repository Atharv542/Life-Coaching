import './styles.css';

const Home = () => {
  return (
    <section className="hero">
      <img src="/Background.jpeg" alt="Life Coaching" className="hero-image" />

      <div className="hero-content">
        {/* Personalized Greeting */}
        <h1 className="hero-greeting">Hey There! I am <span className="highlight-text">Sachin Kaintura</span></h1>

        <h2 className="hero-title">
          Transform Your <span className="highlight-text">Mindset & Life</span>
        </h2>
        <p className="hero-description">
          Unlock your full potential with expert guidance. Achieve your goals, find clarity, and build the confidence to create a fulfilling life. Your journey to success starts now!
        </p>
        <a href="/booking" target="_blank">
          <button className="hero-button">
            Book Your Free Strategy Call
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;



