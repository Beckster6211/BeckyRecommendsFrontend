import React from "react";
import "./table.css";

import Item from "../Item/item";

function FilmTable({ becFood }) {
  return (
    <div className="foodTable">
      <table className="tableFood">
        <thead>
          <tr>
            <th className="tableHeadFood">Food</th>
            <th className="tableHeadFood">Recipe/Where</th>
            <th className="tableHeadFood">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadFood">Food</th>
            <th className="tableHeadFood">Recipe/Where</th>
            <th className="tableHeadFood">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyFood">
          {becFood.map((item, index) => {
            return (
              <Item
                item={item}
                food={item.food}
                foodRecipe={item.recipe}
                foodWhy={item.why}
                foodEmoji={item.emoji}
                index={index}
                id={item.id}
                key={item.id}
                // removeFilm={deleteFilm}
                // tried={handleTried}
                // opinion={handleOpinion}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FilmTable;
