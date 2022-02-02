import React from "react";

import "./footer.css";

function Footer() {
  return (
    <div>
      {/* <div> */}
      <footer className="footer">
        <img
          className="footerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          width="100px"
        />
        <a
          className="footerText"
          href="https://blj-recommend-to-becky.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Recommend
          <br /> to Becky
        </a>

        <img
          className="footerPics"
          src="./Capture1.PNG"
          alt="Quackers head"
          width="100px"
        />
      </footer>
      {/* </div> */}
      {/* <div>
        <a
          href="https://blj-recommendtobecky.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="./rectobecpic.PNG"
            height="150px"
            width="100%"
            alt="recbecpic"
          />
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
