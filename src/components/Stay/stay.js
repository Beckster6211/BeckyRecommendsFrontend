import React, { useState, useEffect } from "react";

import "./stay.css";

import StayTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Stay() {
  const [becStay, setBecStay] = useState([]);
  console.log({ becStay });
  // const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/becstay")
      .then((response) => response.json())
      .then((response) => {
        setBecStay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="stayPage">
      <h3>Stay</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <StayTable becStay={becStay} />
    </div>
  );
}

export default Stay;
