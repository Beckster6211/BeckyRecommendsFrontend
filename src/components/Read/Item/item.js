import React from "react";
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
}) {
  return (
    <tr className="item">
      <td>
        <p>{readBook}</p>
        <p>{readAuthor}</p>
        <p>({readNumberOfBooks})</p>
        <p>{readEmoji}</p>
      </td>
      <td>
        {/* <p>{readConnected}</p> */}
        <textarea defaultValue={readConnected} rows="13" readOnly></textarea>
      </td>
      <td>
        {/* <p>{readDescription}</p> */}
        <textarea defaultValue={readDescription} rows="13" readOnly></textarea>
      </td>
      <td>
        <p>{readWhy}</p>
        {/* <textarea defaultValue={readWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
