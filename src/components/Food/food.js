import React, { useState, useEffect } from "react";

import "./food.css";

import FoodTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Food() {
  const [becFood, setBecFood] = useState([]);
  console.log({ becFood });
  // const [form, setForm] = useState({});
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
      <h3>Food</h3>
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
