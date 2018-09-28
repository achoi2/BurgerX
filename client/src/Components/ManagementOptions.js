import React from "react";
import { withRouter } from "react-router-dom";

const ManagementOptions = (props) => {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">Menu</h5>
          <p className="card-text">
            Use this feature to edit the menu in any way that meets your needs.
          </p>
          <button className="btn btn-primary mb-3 mr-3"  onClick={() => {
          props.history.push("/management/add");
          }}>Add a Menu Item</button>
          <button className="btn btn-danger ml-5 mt-3" onClick={() => {
          props.history.push("/management/delete");
          }}>Delete a Menu Item</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">Reservations</h5>
          <p className="card-text">
            Use this feature to view current reservations.
          </p>
          <button className="btn btn-primary" onClick={() => {props.history.push('/reserved')}}>View Reservations</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">Orders</h5>
          <p className="card-text">
            Use this feature to view current takeout orders.
          </p>
          <button className="btn btn-primary" onClick={() => {props.history.push('/orders')}}>View Orders</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ManagementOptions);

