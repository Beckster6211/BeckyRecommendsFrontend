import React from "react";
import "./table.css";

import Item from "../Item/item";

function VisitTable({ becVisit }) {
  return (
    <div className="visitTable">
      <table className="tableVisit">
        <thead>
          <tr>
            <th className="tableHeadVisit">What</th>
            <th className="tableHeadVisit">Location</th>
            <th className="tableHeadVisit">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadVisit">What</th>
            <th className="tableHeadVisit">Location</th>
            <th className="tableHeadVisit">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyVisit">
          {becVisit.map((item, index) => {
            return (
              <Item
                item={item}
                visitWhat={item.what}
                visitLocation={item.location}
                visitWhy={item.why}
                visitEmoji={item.emoji}
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

export default VisitTable;
