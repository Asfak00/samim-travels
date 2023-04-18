import React from "react";

import Classes from "../Styles/NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={Classes.Navbar}>
        <div className={Classes.brand}>
          <h1 className={Classes.NavLogo}>
            Samim <span>Travels</span>
          </h1>
        </div>

        <ul>
          <li>
            <a href="#hero" className={Classes.active}>
              home
            </a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommendation">places</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
        </ul>

        <button className={Classes.NavBtn}>connect</button>
      </nav>
    </>
  );
}

export default NavBar;
