
import './index.css';
import websortLogo from '../../Assets/WebsortNav.png'; // Adjust path as needed
import googleIcon from '../../Assets/google.jpg';
import instagramIcon from '../../Assets/instagram.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={websortLogo} alt="WebSort Logo" className="footer-logo" />
        <p className="footer-desc">
          Web Development | App Development | UI/UX Design | Digital Marketing
        </p>
        <p className="footer-contact">
          Based in Bangalore | 📧 contact@websort.com | 📞 +91-XXXXXXXXXX
        </p>
      </div>
      <div className="footer-right">
        <img src={googleIcon} alt="Google" />
        <img src={instagramIcon} alt="Instagram" />
        
      </div>
      <p>© 2025 Websort. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
