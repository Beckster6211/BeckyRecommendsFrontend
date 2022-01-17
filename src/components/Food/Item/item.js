import React from "react";
import "./item.css";

function Item({ food, foodRecipe, foodWhy, foodEmoji, index, id, item }) {
  return (
    <tr className="item">
      <td>
        <p>{food}</p>
        <p>{foodEmoji}</p>
      </td>
      <td>
        <p>{foodRecipe}</p>
        {/* <textarea defaultValue={foodRecipe} rows="13" readOnly></textarea> */}
      </td>
      <td>
        <p>{foodWhy}</p>
        {/* <textarea defaultValue={foodWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
