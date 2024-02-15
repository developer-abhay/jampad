import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div>
          <h3>Rhythmicstan - Jampad and Studios</h3>
        </div>
        <div>
          <a href="/">
            <FaFacebookSquare className="icon" />
          </a>
          <a href="/">
            <FaInstagramSquare className="icon" />
          </a>
          <a href="/">
            <FaSquareYoutube className="icon" />
          </a>
          <a href="/">
            <FaTwitterSquare className="icon" />
          </a>
        </div>
      </div>
      <hr />
      <p>COPYRIGHT © 2024 Rhythmicstan Music Academy</p>
    </footer>
  );
};

export default Footer;
