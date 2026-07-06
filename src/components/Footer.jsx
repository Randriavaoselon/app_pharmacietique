import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import "../style/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__col">
            <a href="/">
              <img src={logo} alt="Logo" className="footer__logo" />
            </a>
            <p className="footer__desc">
              Committed to innovation, quality
              <br />
              and better healthCare for all.
            </p>
            <div className="footer__socials">
              <FiLinkedin /> <FiTwitter /> <FiFacebook /> <FiYoutube />
            </div>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Our Leadership</a>
            <a href="#">Careers</a>
            <a href="#">News & Media</a>
          </div>

          <div className="footer__col">
            <h4>Our Services</h4>
            <a href="#">Research & Development</a>
            <a href="#">Manufacturing</a>
            <a href="#">Quality Assurance</a>
            <a href="#">Regulatory Affairs</a>
          </div>

          <div className="footer__col">
            <h4>Information</h4>
            <a href="#">Investors</a>
            <a href="#">Sustainability</a>
            <a href="#">FAQs</a>
            <a href="#">Downloads</a>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <p className="p_address">
              <FiMapPin /> 101, Antananarivo, Analamanga
            </p>
            <p className="p_contact">
              <FiPhone /> +261 32 14 146 19
            </p>
            <p className="p_email">
              <FiMail /> selonrandriavao@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
