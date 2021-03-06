import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <img
          className="headerPics"
          src="./Capture1.PNG"
          alt="Quackers head"
          width="100px"
        />
        <a className="headerText" href="/">
          Becky <br /> Recommends
        </a>
        <img
          className="headerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          width="100px"
        />
      </header>
    </div>
  );
}

export default Header;
