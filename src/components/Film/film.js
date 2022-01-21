import React, { useState, useEffect } from "react";

import "./film.css";

import FilmTable from "./Table/table";

function Film() {
  const [becFilm, setBecFilm] = useState([]);
  console.log({ becFilm });
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://becky-recommends.herokuapp.com/becfilm")
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
      {/* <h3>Film</h3> */}
      <div>
        <p className="filmPageText">These are films I recommend...</p>
        <p className="filmPageSepText">
          I like different genres of film (apart from horror 😱){" "}
          <small>
            Don't be surprised if alot of them are animated (I love animation )
            😁
          </small>
        </p>
      </div>
      {/* <div>
        <details>
          <summary>Film Video</summary>
          <video></video>
        </details>
      </div> */}
      <FilmTable becFilm={becFilm} />
    </div>
  );
}

export default Film;
