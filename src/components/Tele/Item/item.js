import React from "react";
import "./item.css";

function Item({
  teleTvShow,
  teleProvider,
  teleConnected,
  teleGenre,
  teleNumberOfSeries,
  teleDescription,
  teleWhy,
  teleEmoji,
  index,
  id,
  item,
}) {
  return (
    <tr className="item">
      <td>
        <p>{teleTvShow}</p>
        <p>{teleProvider}</p>
        <p>({teleNumberOfSeries})</p>
        <p>{teleEmoji}</p>
      </td>
      <td>
        {/* <p>{teleConnected}</p> */}
        <textarea defaultValue={teleConnected} rows="13" readOnly></textarea>
      </td>
      <td>
        {/* <p>{teleDescription}</p> */}
        <textarea defaultValue={teleDescription} rows="13" readOnly></textarea>
      </td>
      <td>
        <p>{teleWhy}</p>
        {/* <textarea defaultValue={teleWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
