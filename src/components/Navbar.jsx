import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation and scrolling
  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => scrollToSection(section), 200); // Wait a bit, then scroll
    } else {
      scrollToSection(section); // Directly scroll if already on home
    }
  };

  return (
    <nav className="bg-[#105153] px-20 py-4 left-0 top-0 w-full z-50 fixed flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <img src='/Logo2.svg' className='h-10' alt="Logo" />
        <div className="text-white text-2xl font-semibold">Self-Discovery & Mindfulness</div>
      </div>
      <ul className="flex space-x-6">
        <li>
          <button 
            onClick={() => handleNavigation('home')}
            className="text-white hover:text-teal-300 cursor-pointer text-xl font-semibold transition duration-300"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('contact')}
            className="text-white hover:text-teal-300 cursor-pointer text-xl font-semibold transition duration-300"
          >
            Services
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('about')}
            className="text-gray-200 hover:text-teal-300 cursor-pointer text-xl font-semibold transition duration-300"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('successStories')}
            className="text-gray-200 hover:text-teal-300 cursor-pointer text-xl font-semibold transition duration-300"
          >
            Success Stories
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

