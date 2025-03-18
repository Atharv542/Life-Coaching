import './styles.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-links">
      
        <a href="https://www.instagram.com/sachin.kaintura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img className='icon' src='/instagram.png'/></a>
        
        <a href="https://www.facebook.com/share/15iXo19Mni/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><img className='icon' src='/facebook2.png'/></a>
        
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img className='icon' src='/linkedin.png'/></a>
      </div>
      <p className='footer-para'>&copy; {new Date().getFullYear()} Life Coaching. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
