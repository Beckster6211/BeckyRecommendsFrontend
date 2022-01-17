import React from "react";
import "./item.css";

function Item({
  stayWhat,
  stayLocation,
  stayDetails,
  stayWhy,
  stayEmoji,
  index,
  id,
  item,
}) {
  return (
    <tr className="item">
      <td>
        <p>{stayWhat}</p>
        <p>{stayEmoji}</p>
      </td>
      <td>
        {/* <p>{stayLocation}</p> */}
        <textarea defaultValue={stayLocation} rows="13" readOnly></textarea>
      </td>
      <td>
        {/* <p>{stayDetails}</p> */}
        <textarea defaultValue={stayDetails} rows="13" readOnly></textarea>
      </td>
      <td>
        <p>{stayWhy}</p>
        {/* <textarea defaultValue={stayWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
