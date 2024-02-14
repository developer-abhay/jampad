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
          <h1>Jampad and Studios</h1>
          <p>Choose something</p>
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
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
          <a href="/">Changelog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
