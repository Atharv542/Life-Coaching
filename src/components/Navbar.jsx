import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // ✅ Import hamburger & close icons
import { motion, AnimatePresence } from "framer-motion"; // ✅ For animations

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // ✅ State for mobile menu

  // Close menu when navigating to a new section
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 200);
    } else {
      scrollToSection(section);
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-[#105153] px-6 md:px-20 py-4 left-0 top-0 w-full z-50 fixed flex justify-between items-center shadow-md">
      
      {/* ✅ Logo Section */}
      <div className="flex items-center space-x-3">
        <img src="/Logo2.svg" className="h-10" alt="Logo" />
        <div className="text-white text-2xl md:text-2xl font-semibold">
          Self-Discovery & Mindfulness
        </div>
      </div>

      {/* ✅ Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden md:flex space-x-6">
        {["Home", "Services", "About", "Success Stories","Pricing"].map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(item.toLowerCase().replace(" ", ""))}
              className="text-white hover:text-teal-300 cursor-pointer text-2xl font-semibold transition duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Hamburger Menu (Mobile Only) */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* ✅ Mobile Menu (Slide In) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#105153] text-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "Services", "About", "Success Stories","Pricing"].map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.toLowerCase().replace(" ", ""))}
                className="text-lg font-semibold hover:text-teal-300 transition duration-300"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


