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

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div> {/* Ensures content doesn't go under navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div  style={{ paddingTop: '60px' }} ref={homeRef}>
                <Navbar scrollToSection={scrollToSection} />
                  <Home />
                </div>
                <div  style={{ paddingTop: '60px' }} ref={contactRef}>
                <Navbar scrollToSection={scrollToSection} />
                <Services />
                </div>
                <div  style={{}} ref={aboutRef}>
                <Navbar scrollToSection={scrollToSection} />
                  <AboutMe />
                </div>

                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/personalDevelopment" element={<PersonalDevelopment />} />
          <Route path="/careerCoaching" element={<CareerCoaching />} />
          <Route path="/mindfullCoaching" element={<MindfulnessCoaching/>}/>
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;




