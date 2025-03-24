import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src='/Logo2.svg' className='Logo'/>
        <div  className="logo">Self-Discovery & Mindfulness</div>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}  className="nav-link">
            Home
          </Link>
        </li>
        
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">
            Services 
          </Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link">
            About 
          </Link>
        </li>
        {/*<li>
          <Link to="/booking" className="nav-link">
            Let's Talk 
          </Link>
        </li>
        {/*<li>
          <Link to="/" className="nav-link">
            Payment
          </Link>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;



