import React from "react";

const DisplayOrders = ({ orders }) => {
  return (
    <div className="card-deck">
      {orders.map(data => {
        return (
          <div className="card" key={data.id} style={{width:'50rem'}}>
            <div className="card-body">
              <div className="card-title">{data.client}</div>
              <div className="card-text">
                <p>{data.phone}</p>
                <p>{data.items}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default DisplayOrders;
