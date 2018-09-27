import React from "react";

const ManagementOptions = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">Edit Menu</h5>
          <p className="card-text">
            Use this feature to edit the menu in any way that meets your needs.
          </p>
          <button className="btn btn-primary mr-5">Add To Menu</button>
          <button className="btn btn-secondary">Update Menu</button>
          <button className="btn btn-danger ml-5 mt-3">Delete From Menu</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">View Reservations</h5>
          <p className="card-text">
            Use this feature to keep track of current reservations to all of
            your restaurants.
          </p>
          <button className="btn btn-primary">View Reservations</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted">View Caart</h5>
          <p className="card-text">
            Use this feature to view current oders placed by customers and
            customr details.
          </p>
          <button className="btn btn-primary">View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ManagementOptions;
