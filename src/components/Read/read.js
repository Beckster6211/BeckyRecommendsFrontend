import React, { useState, useEffect } from "react";

import "./read.css";

import ReadTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Read() {
  const [becRead, setBecRead] = useState([]);
  console.log({ becRead });
  // const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/becread")
      .then((response) => response.json())
      .then((response) => {
        setBecRead(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="readPage">
      <h3>Read</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <ReadTable becRead={becRead} />
    </div>
  );
}

export default Read;
