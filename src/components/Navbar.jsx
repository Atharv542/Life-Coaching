import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div  className="logo">Life Coaching </div>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/"   className="nav-link">
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



