import React from "react";

import Classes from "../Styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className={Classes.Navbar}>
      <div className={Classes.brand}>
        <h1 className={Classes.NavLogo}>
          Samim <span>Travels</span>
        </h1>
      </div>

      <ul>
        <li className={Classes.active}>
          <a href="#home"></a>home
        </li>
        <li>
          <a href="#service"></a>Services
        </li>
        <li>
          <a href="#recommendation"></a>places
        </li>
        <li>
          <a href="#testimonials"></a>testimonials
        </li>
      </ul>

      <button className={Classes.NavBtn}>connect</button>
    </nav>
  );
}

export default NavBar;
