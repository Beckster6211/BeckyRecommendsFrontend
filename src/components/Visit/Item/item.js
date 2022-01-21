import React from "react";
import "./item.css";

function Item({
  visitWhat,
  visitLocation,
  visitWhy,
  visitEmoji,
  index,
  id,
  item,
}) {
  return (
    <tr className="item">
      <td>
        <p className="visitItem">{visitWhat}</p>
        <p className="visitItem">{visitEmoji}</p>
      </td>
      <td>
        {/* <p>{visitLocation}</p> */}
        <textarea
          className="visitItemTextarea"
          defaultValue={visitLocation}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        <p className="visitItem">{visitWhy}</p>
        {/* <textarea defaultValue={visitWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
