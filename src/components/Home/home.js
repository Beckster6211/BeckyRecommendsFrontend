import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="homePage">
      {/* <p className="homeDescriptionWhy">
        π§° I made this as I wanted to practice all the different aspects taught
        on School of Code π§ in particular backend and database work βοΈ (which
        really confused me whilst learning it π€ͺ) combining that with frontend
        work of React and connecting the two sides together π€ getting them to
        make friends π§βπ€βπ§
      </p> */}
      <p className="homeDescriptionWhy">
        This is the partner of my other site <br />
        <strong>Recommend to Becky</strong> <br />
        π which you can get to <small>(In a new tab)</small> by clicking the
        footer at the bottom π
      </p>
      <p className="homeDescriptionHow">
        π‘ Recommend to Becky{" "}
        <small>
          (which I hope you have experienced as you can get to this site from
          that one)
        </small>{" "}
        Is where you can leave recommendations for me in different catagories
        <small> (food, visit, stay, book, tele and film)</small>
      </p>
      <p className="homeDescriptionHow">
        π§  The idea behind <strong>Becky Recommends</strong> is to assist if
        having trouble and need some help with recommendations π­ sometimes
        seeing what I have recommended to others can help you with knowing
        whether you are a million miles off or right on target with your
        suggestion π€
        <br />
        <strong>
          <small>
            <q>
              I'm not sure if Becky would like this film, oh cool Becky
              recommends something like this to other people maybe she will like
              it then.
            </q>
          </small>
        </strong>
      </p>
      <p className="homeDescriptionHow">
        Or π€· maybe you like my suggestions and take something away from it{" "}
        <br />
        <strong>
          π Don't judge me for my suggestions{" "}
          <small>(I won't judge others)</small> π€ͺ I'm quirky and eclectic. Deal
          with it π
        </strong>
      </p>
    </div>
  );
}

export default Home;
