// import logo from "../../logo.svg";
import "./App.css";

import Header from "../Header/header";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div className="footer">
        <img
          className="footerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          //   onClick={() => loginWithRedirect()}
          width="100px"
        />
        <a className="footerText" href="/">
          Becky <br /> Recommends
        </a> */}
      {/* <h3 className="headerText">
          Becky <br /> Recommends
        </h3> */}

      {/* <img
          className="footerPics"
          src="./Capture1.PNG"
          alt="Quackers head"
          //   onClick={() => logout({ returnTo: window.location.origin })}
          width="100px"
        />
      </div> */}
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
