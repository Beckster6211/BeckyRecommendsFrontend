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
        <p className="readItem">{readBook}</p>
        <p className="readItem">{readAuthor}</p>
        <p className="readItem">({readNumberOfBooks})</p>
        <p className="readItem">{readEmoji}</p>
      </td>
      <td>
        {/* <p>{readConnected}</p> */}
        <textarea
          className="readItemTextarea"
          defaultValue={readConnected}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        {/* <p>{readDescription}</p> */}
        <textarea
          className="readItemTextarea"
          defaultValue={readDescription}
          rows="13"
          readOnly
        ></textarea>
      </td>
      <td>
        <p className="readItem">{readWhy}</p>
        {/* <textarea defaultValue={readWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
