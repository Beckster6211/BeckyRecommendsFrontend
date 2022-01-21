import React, { useState, useEffect } from "react";

import "./stay.css";

import StayTable from "./Table/table";

function Stay() {
  const [becStay, setBecStay] = useState([]);
  console.log({ becStay });
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://becky-recommends.herokuapp.com/becstay")
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
      {/* <h3>Stay</h3> */}
      <div>
        <p className="stayPageText">
          These are places I have stayed I recommend to others
        </p>
        <p className="stayPageSepText">Bring a sense of fun and adventure.</p>
      </div>
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
