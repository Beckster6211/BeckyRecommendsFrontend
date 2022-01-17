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
          //   onClick={() => logout({ returnTo: window.location.origin })}
          width="100px"
        />
        <a className="headerText" href="/">
          Becky <br /> Recommends
        </a>
        {/* <h3 className="headerText">
          Becky <br /> Recommends
        </h3> */}
        <img
          className="headerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          //   onClick={() => loginWithRedirect()}
          width="100px"
        />
      </header>
    </div>
  );
}

export default Header;
