import React from "react";
import "./item.css";

function Item({ food, foodRecipe, foodWhy, foodEmoji, index, id, item }) {
  return (
    <tr className="item">
      <td>
        <p className="foodItem">{food}</p>
        <p className="foodItem">{foodEmoji}</p>
      </td>
      <td>
        <p className="foodItem">{foodRecipe}</p>
        {/* <textarea defaultValue={foodRecipe} rows="13" readOnly></textarea> */}
      </td>
      <td>
        <p className="foodItem">{foodWhy}</p>
        {/* <textarea defaultValue={foodWhy} rows="13" readOnly></textarea> */}
      </td>
    </tr>
  );
}

export default Item;
