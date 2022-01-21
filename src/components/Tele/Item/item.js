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
        <p className="teleItem">{teleTvShow}</p>
        <p className="teleItem">{teleProvider}</p>
        <p className="teleItem">({teleNumberOfSeries})</p>
        <p className="teleItem">{teleEmoji}</p>
      </td>
      <td>
        {/* <p>{teleConnected}</p> */}
        <textarea
          className="teleItemTextarea"
          defaultValue={teleConnected}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        {/* <p>{teleDescription}</p> */}
        <textarea
          className="teleItemTextarea"
          defaultValue={teleDescription}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        <p className="teleItem">{teleWhy}</p>
        {/* <textarea defaultValue={teleWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
