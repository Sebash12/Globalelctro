import "./Navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [showContactList, setShowContactList] = useState(false);

  const handleMouseOver = () => {
    setShowContactList(true);
  };

  const handleMouseOut = () => {
    setShowContactList(false);
  };

  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about-us">Sobre nosotros</a>
          </li>
          <li>
            <a href="contact-us">Contacto</a>
          </li>

          <a href="/">
            <img className="logo" src="/Logo.jpg" alt="logo" />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
