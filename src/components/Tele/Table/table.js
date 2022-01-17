import React from "react";
import "./table.css";

import Item from "../Item/item";

function TeleTable({ becTele }) {
  return (
    <div className="teleTable">
      <table className="tableTele">
        <thead>
          <tr>
            <th className="tableHeadTele">TV Show & Provider</th>
            <th className="tableHeadTele">Connected With</th>
            <th className="tableHeadTele">Descriptions</th>
            <th className="tableHeadTele">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadTele">TV Show & Provider</th>
            <th className="tableHeadTele">Connected With</th>
            <th className="tableHeadTele">Descriptions</th>
            <th className="tableHeadTele">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyTele">
          {becTele.map((item, index) => {
            return (
              <Item
                item={item}
                teleTvShow={item.tvshow}
                teleProvider={item.provider}
                teleConnected={item.connected}
                teleGenre={item.genre}
                teleNumberOfSeries={item.numberofseries}
                teleDescription={item.description}
                teleWhy={item.why}
                teleEmoji={item.emoji}
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

export default TeleTable;
