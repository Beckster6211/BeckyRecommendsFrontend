import React from "react";
import "./table.css";

import Item from "../Item/item";

function ReadTable({ becRead }) {
  return (
    <div className="readTable">
      <table className="tableRead">
        <thead>
          <tr>
            <th className="tableHeadRead">Book & Author</th>
            <th className="tableHeadRead">Connected With</th>
            <th className="tableHeadRead">Description</th>
            <th className="tableHeadRead">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadRead">Book & Author</th>
            <th className="tableHeadRead">Connected With</th>
            <th className="tableHeadRead">Description</th>
            <th className="tableHeadRead">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyRead">
          {becRead.map((item, index) => {
            return (
              <Item
                item={item}
                readBook={item.book}
                readAuthor={item.author}
                readConnected={item.connected}
                readGenre={item.genre}
                readNumberOfBooks={item.numberofbooks}
                readDescription={item.description}
                readWhy={item.why}
                readEmoji={item.emoji}
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

export default ReadTable;
