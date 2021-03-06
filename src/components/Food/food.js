import React, { useState, useEffect } from "react";

import "./food.css";

import FoodTable from "./Table/table";

function Food() {
  const [becFood, setBecFood] = useState([]);
  console.log({ becFood });
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://becky-recommends.herokuapp.com/becfood")
      .then((response) => response.json())
      .then((response) => {
        setBecFood(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="foodPage">
      {/* <h3 className="foodPageHeading">Food</h3> */}
      <div>
        <p className="foodPageText">
          These are foods I recommend to other people
          <br />
          😋 Enjoy! 😋
        </p>
        <p className="foodPageSepText">
          I am a sweet tooth meat eating carnivore sorry...😔{" "}
          <small>
            I will add more and try to be as inclusive as possible 👍
          </small>
        </p>
        {/* <br />I am not a fan of spicy or hot food, I do like some things with a
        bit of a kick{" "}
        <small>
          <em>e.g. fajitas, chinese curry</em>
        </small>{" "}
        🥵 */}
      </div>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}

      <FoodTable becFood={becFood} />
    </div>
  );
}

export default Food;
