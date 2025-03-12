import './styles.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Life Coaching. All rights reserved.</p>
      <div className="footer-links">
        <FaInstagram className="icon" />

        <a href="https://www.instagram.com/sachin.kaintura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram</a>
        <FaFacebook className="icon"  />
        <a href="https://www.facebook.com/share/15iXo19Mni/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a>
        <FaLinkedin className="icon" />
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
