import React from "react";
import "./table.css";

import Item from "../Item/item";

function StayTable({ becStay }) {
  return (
    <div className="stayTable">
      <table className="tableStay">
        <thead>
          <tr>
            <th className="tableHeadStay">What</th>
            <th className="tableHeadStay">Location</th>
            <th className="tableHeadStay">Details</th>
            <th className="tableHeadStay">Why I Recommend</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadStay">What</th>
            <th className="tableHeadStay">Location</th>
            <th className="tableHeadStay">Details</th>
            <th className="tableHeadStay">Why I Recommend</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyStay">
          {becStay.map((item, index) => {
            return (
              <Item
                item={item}
                stayWhat={item.what}
                stayLocation={item.location}
                stayDetails={item.details}
                stayWhy={item.why}
                stayEmoji={item.emoji}
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

export default StayTable;
