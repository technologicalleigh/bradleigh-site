import React from "react";
import Mobile from "../assets/mobile.svg";
import Desktop from "../assets/desktop.svg";
import styles from "../assets/Intro.css";

function Introduction() {
  return (
    <div className={styles}>
      <h1>Hello!</h1>
      <h2 className="name">I'm Bradleigh Kottke!</h2>
      <h2>I'm a passionate Web Developer and Software Enthusiast</h2>
      <div className="svg-container">
        <img className="desktop-svg" src={Desktop} alt="Desktop SVG" />
        <img className="mobile-svg" src={Mobile} alt="Mobile SVG" />
      </div>
    </div>
  );
}

export default Introduction;
