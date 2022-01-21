import React, { useState, useEffect } from "react";

import "./read.css";

import ReadTable from "./Table/table";

function Read() {
  const [becRead, setBecRead] = useState([]);
  console.log({ becRead });
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://becky-recommends.herokuapp.com/becread")
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
      {/* <h3>Read</h3> */}
      <div>
        <p className="readPageText">These are books I recommend to others</p>
        <p className="readPageSepText">
          It could be because I like tv series/film that its based on{" "}
          <small>
            Or that I like certain characters portrayed differently/more indepth
          </small>
        </p>
      </div>
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
