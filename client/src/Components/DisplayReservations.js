import React from "react";

const DisplayReservations = ({ reserved }) => {
  return (
    <div>
      {reserved.map(data => {
        return (
          <div key={data.id}>
            <ul>
              <li>
                <p>{data.client}</p>
                <p>{data.phone}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayReservations;
