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
        <p className="stayItem">{stayWhat}</p>
        <p className="stayItem">{stayEmoji}</p>
      </td>
      <td>
        {/* <p>{stayLocation}</p> */}
        <textarea
          className="stayItemTextarea"
          defaultValue={stayLocation}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        {/* <p>{stayDetails}</p> */}
        <textarea
          className="stayItemTextarea"
          defaultValue={stayDetails}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        <p className="stayItem">{stayWhy}</p>
        {/* <textarea defaultValue={stayWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
