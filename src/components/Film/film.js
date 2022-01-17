import React, { useState, useEffect } from "react";

import "./film.css";

import FilmTable from "./Table/table";
// import FilmForm from "./Form/form";
// import YesNo from "./YesNo/yesNo";

function Film() {
  const [becFilm, setBecFilm] = useState([]);
  console.log({ becFilm });
  // const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/becfilm")
      .then((response) => response.json())
      .then((response) => {
        setBecFilm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div className="filmPage">
      <h3>Film</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <FilmTable becFilm={becFilm} />
    </div>
  );
}

export default Film;
