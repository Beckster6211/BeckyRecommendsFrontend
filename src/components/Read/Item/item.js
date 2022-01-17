import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

function Item({
  readBook,
  readAuthor,
  readConnected,
  readGenre,
  readNumberOfBooks,
  readDescription,
  readWhy,
  readEmoji,
  index,
  id,
  item,
  //   tried,
  //   opinion,
}) {
  //   const { user } = useAuth0();
  //   // console.log(user);

  //   function enableIfMe(user) {
  //     if (user === undefined) {
  //       let enabled = true;
  //       return enabled;
  //     } else if (user.name === "Beckster") {
  //       let disabled = false;
  //       return disabled;
  //     }
  //   }

  return (
    <tr className="item">
      <td>
        <p>{readBook}</p>
        <p>{readAuthor}</p>
        <p>({readNumberOfBooks})</p>
        <p>{readEmoji}</p>
      </td>
      <td>
        {/* <p>{filmConnected}</p> */}
        <textarea defaultValue={readConnected} rows="13" readOnly></textarea>
      </td>
      <td>
        {/* <p>{filmDescription}</p> */}
        <textarea defaultValue={readDescription} rows="13" readOnly></textarea>
      </td>
      {/* {user === undefined ? (
        <td>
          <input
            className="checkBox filmBeckyOpinion"
            type="checkbox"
            checked={watched}
            disabled={enableIfMe(user)}
          />
          <p className="filmBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😍
          </button>
          <button
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😕
          </button>
          <button
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🥱
          </button>
        </td>
      ) : (
        <td>
          <input
            className="checkBox filmBeckyOpinion"
            type="checkbox"
            checked={watched}
            onChange={() => {
              tried(id, item);
            }}
          />
          <p className="filmBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😍
          </button>
          <button
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😕
          </button>
          <button
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🥱
          </button>
        </td>
      )} */}
      <td>
        <p>{readWhy}</p>
        {/* <textarea defaultValue={filmWhy} rows="13" readOnly></textarea> */}
      </td>
      {/* <td>
        <button
          onClick={() => {
            removeFilm(index, id);
          }}
        >
          🗑️
        </button>
      </td> */}
    </tr>
  );
}

export default Item;
