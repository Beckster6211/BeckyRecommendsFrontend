import React, { useState, useEffect } from "react";

import "./visit.css";

import VisitTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Visit() {
  const [becVisit, setBecVisit] = useState([]);
  console.log({ becVisit });
  // const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/becvisit")
      .then((response) => response.json())
      .then((response) => {
        setBecVisit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="visitPage">
      <h3>Visit</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <VisitTable becVisit={becVisit} />
    </div>
  );
}

export default Visit;
