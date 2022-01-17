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
        <p>{film}</p>
        <p>{filmProvider}</p>
        <p>{filmEmoji}</p>
      </td>
      <td>
        {/* <p>{filmConnected}</p> */}
        <textarea defaultValue={filmConnected} rows="13" readOnly></textarea>
      </td>
      <td>
        {/* <p>{filmDescription}</p> */}
        <textarea defaultValue={filmDescription} rows="13" readOnly></textarea>
      </td>
      <td>
        <p>{filmWhy}</p>
        {/* <textarea defaultValue={filmWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
