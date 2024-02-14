import { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../data/NavItems";
import "./Nav.css";
//Icons
import logo from "/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  //   Function to expand and close the nav menu in smaller devices
  const [clicked, setClicked] = useState(false);
  const showMenu = () => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="hamburger" onClick={showMenu}>
        {clicked ? (
          <RxCross1 className="icon" />
        ) : (
          <GiHamburgerMenu className="icon" />
        )}
      </div>
      <ul className="nav-menu">
        {NavItems.map(({ title, url, classN }) => {
          return (
            <li key={title}>
              <Link to={url} className={classN}>
                {title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Nav;
