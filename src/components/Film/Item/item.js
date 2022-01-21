import React from "react";
import "./item.css";

function Item({
  film,
  filmProvider,
  filmConnected,
  filmGenre,
  filmDescription,
  filmWhy,
  filmEmoji,
  index,
  id,
  item,
}) {
  return (
    <tr className="item">
      <td>
        <p className="filmItem">{film}</p>
        <p className="filmItem">{filmProvider}</p>
        <p className="filmItem">{filmEmoji}</p>
      </td>
      <td>
        {/* <p>{filmConnected}</p> */}
        <textarea
          className="filmItemTextarea"
          defaultValue={filmConnected}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        {/* <p>{filmDescription}</p> */}
        <textarea
          className="filmItemTextarea"
          defaultValue={filmDescription}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        <p className="filmItem">{filmWhy}</p>
        {/* <textarea defaultValue={filmWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
