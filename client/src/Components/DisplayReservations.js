import React from "react";

const DisplayReservations = ({ reserved }) => {
  return (
    <div className="card-deck">
      {reserved.map(data => {
        return (
          <div className="card" key={data.id} style={{width:'50rem'}}>
            <div className="card-body">
              <div className="card-title">{data.client}</div>
              <div className="card-text">
                <p>{data.phone}</p>
                <p>{data.party_size}</p>
                <p>{data.reserve_date}</p>
                <p>{data.reserved_time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default DisplayReservations;
