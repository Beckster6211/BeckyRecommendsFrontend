import React, { useState, useEffect } from "react";

import "./tele.css";

import TeleTable from "./Table/table";

function Tele() {
  const [becTele, setBecTele] = useState([]);
  console.log({ becTele });
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://becky-recommends.herokuapp.com/bectele")
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
      {/* <h3>Tele</h3> */}
      <div>
        <p className="telePageText">
          These are tv shows I recommend to other people
        </p>
        <p className="telePageSepText">
          My rule is I give a show 5 episodes to grab me 🎣{" "}
          <small>If I'm not hooked by then I cut it loose 🥱</small>
        </p>
      </div>
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
