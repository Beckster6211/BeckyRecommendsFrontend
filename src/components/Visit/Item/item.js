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
        <p>{visitWhat}</p>
        <p>{visitEmoji}</p>
      </td>
      <td>
        {/* <p>{visitLocation}</p> */}
        <textarea defaultValue={visitLocation} rows="13" readOnly></textarea>
      </td>
      <td>
        <p>{visitWhy}</p>
        {/* <textarea defaultValue={visitWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
