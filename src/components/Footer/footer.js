import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img
          className="footerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          //   onClick={() => loginWithRedirect()}
          width="100px"
        />
        <a
          className="footerText"
          href="https://blj-recommendtobecky.netlify.app/"
        >
          Recommend to <br /> Becky
        </a>
        {/* <h3 className="headerText">
          Becky <br /> Recommends
        </h3> */}

        <img
          className="footerPics"
          src="./Capture1.PNG"
          alt="Quackers head"
          //   onClick={() => logout({ returnTo: window.location.origin })}
          width="100px"
        />
      </footer>
    </div>
  );
}

export default Footer;
