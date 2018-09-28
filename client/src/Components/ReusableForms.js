import React from "react";
const ReservationTimeInput = ({ onChange, value, required }) => {
  return (
    <div className="form-group">
      <label>
        Time <strong style={Styles.wildcard}>*</strong>
      </label>
      <select
        onChange={onChange}
        required={required}
        value={value}
        className="form-control"
      >
        <option value="">--</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="7:00 PM">7:00 PM</option>
        <option value="8:00 PM">8: 00 PM</option>
        <option value="9:00 PM">9: 00 PM</option>
      </select>
    </div>
  );
};

export default ReservationTimeInput;

export const AdminDeleteForm = ({ type, name, onSubmit, onChange, value }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Delete</div>
              <div className="card-text">
                <p>Select Item to be deleted based on its ID.</p>
                <form className="form-group" onSubmit={onSubmit}>
                  <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                  />
                  <button className="btn btn-danger">Delete</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Styles = {
  wildcard: {
    color: "red"
  }
};
