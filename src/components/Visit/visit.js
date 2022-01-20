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
    fetch("https://becky-recommends.herokuapp.com/becvisit")
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
      {/* <h3>Visit</h3> */}
      <div>
        <p className="visitPageText">
          These are places I have visited I recommend to other people
        </p>
        <p className="visitPageSepText">
          Some you may need an appetite for, others just a sense of fun.
        </p>
      </div>
      {/* <div>
        <details>
          <summary>Visit Video</summary>
          <video></video>
        </details>
      </div> */}
      <VisitTable becVisit={becVisit} />
    </div>
  );
}

export default Visit;
