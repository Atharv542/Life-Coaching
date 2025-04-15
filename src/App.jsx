import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "react-hot-toast";
import PersonalDevelopment from './components/PersonalDevelopment';
import CareerCoaching from './components/CareerCoaching';
import MindfulnessCoaching from './components/Mindfulness';
import Pricing from './components/Pricing';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const storiesRef= useRef(null);
  const pricingRef= useRef(null);

  // Scroll to section function
  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'services' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (section === 'successstories' && storiesRef.current) {
      storiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(section === 'pricing' && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />
      <div> {/* Ensures content doesn't go under navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div  style={{ paddingTop: '60px' }} ref={homeRef}>
               
                  <Home />
                </div>
                <div  style={{ paddingTop: '100px' }} ref={contactRef}>
                
                <Services />
                </div>
                <div  style={{ paddingTop: '80px'}} ref={aboutRef}>
               
                  <AboutMe />
                </div>
                <div  style={{ paddingTop: '80px'}} ref={storiesRef}>
                
                <Testimonials />
                </div>
                <div style={{ paddingTop: '60px'}} ref={pricingRef}>
                <Pricing/>
                </div>
                
                
                <Footer />
              </>
            }
          />
          <Route path="/booking" element={
            <div>
              <BookingForm />
              <Footer/>
            </div>
            } />
          <Route path="/personal-development" element={
            <div>
              <PersonalDevelopment />
              <Footer/>
            </div>
            } />
          <Route path="/career-coaching" element={
            <div>
                <CareerCoaching />
                <Footer/>
            </div>
            } />
          <Route path="/mindfull-coaching" element={
            <div>
              <MindfulnessCoaching/>
              <Footer/>
            </div>
          }/>
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
