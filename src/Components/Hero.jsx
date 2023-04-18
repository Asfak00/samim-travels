import React from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  return (
    <section className={Classes.heroContainer}>
      <div className={Classes.heroimage}>
        <img src={Banner} alt="" />
      </div>

      <div className={Classes.content}>
        <div className={Classes.title}>
          <h1>
            Travel & Explore With{" "}
            <span className={Classes.nickName}>Samim Travels</span>
          </h1>
          <p>
            Save at least 15% on stays worldwide, from relaxing retreats to
            off-grid adventures
          </p>
        </div>

        <div className={Classes.bookingContainer}>
          <div className={Classes.search}>
            <label>Where you want to go</label>
            <input type="text" placeholder="search your location" />
          </div>

          <div className={Classes.search}>
            <label>Check in</label>
            <input type="date" />
          </div>

          <div className={Classes.search}>
            <label>Check out</label>
            <input type="date" />
          </div>

          <button>book now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
