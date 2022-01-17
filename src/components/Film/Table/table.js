import React from "react";
import "./table.css";

import Item from "../Item/item";

function FilmTable({ becFilm }) {
  return (
    <div className="filmTable">
      <table className="tableFilm">
        <thead>
          <tr>
            <th className="tableHeadFilm">Film? & Provider?</th>
            <th className="tableHeadFilm">Connected with?</th>
            <th className="tableHeadFilm">Description?</th>
            <th className="tableHeadFilm">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadFilm">Film? & Provider?</th>
            <th className="tableHeadFilm">Connected with?</th>
            <th className="tableHeadFilm">Description?</th>
            <th className="tableHeadFilm">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyFilm">
          {becFilm.map((item, index) => {
            return (
              <Item
                item={item}
                film={item.film}
                filmProvider={item.provider}
                filmConnected={item.connected}
                filmGenre={item.genre}
                filmDescription={item.description}
                filmWhy={item.why}
                filmEmoji={item.emoji}
                index={index}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FilmTable;
