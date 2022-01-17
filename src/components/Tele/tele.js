import React, { useState, useEffect } from "react";

import "./tele.css";

import TeleTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Tele() {
  const [becTele, setBecTele] = useState([]);
  console.log({ becTele });
  // const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/bectele")
      .then((response) => response.json())
      .then((response) => {
        setBecTele(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="telePage">
      <h3>Tele</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <TeleTable becTele={becTele} />
    </div>
  );
}

export default Tele;
