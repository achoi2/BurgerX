import React from "react";

const ReservationForm = ({
  client,
  phone,
  party_size,
  reserve_date,
  reserved_time,
  submitForm,
  handleChange
}) => {
  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label>Name <strong style={Styles.wildcard}>*</strong></label>
        <input
          className="form-control"
          type="text"
          value={client}
          required={true}
          onChange={e => handleChange(e, "client")}
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <label>Phone <strong style={Styles.wildcard}>*</strong></label>
        <input
          className="form-control"
          type="tel"
          value={phone}
          required={true}
          onChange={e => handleChange(e, "phone")}
          placeholder="phone"
        />
      </div>
      <div className="form-group">
        <label>Part Size</label>
        <input
          className="form-control"
          type="number"
          placeholder="party size"
          value={party_size}
          onChange={e => handleChange(e, "party_size")}
        />
      </div>
      <div className="form-group">
        <label>Time <strong style={Styles.wildcard}>*</strong></label>
        <select className="form-control">
          <option
            value={reserved_time}
            required={true}
            onChange={e => handleChange(e, "reserved_time")}
          >
            6: 00 PM
          </option>
          <option
            value={reserved_time}
            onChange={e => handleChange(e, "reserved_time")}
          >
            7: 00 PM
          </option>
          <option
            value={reserved_time}
            onChange={e => handleChange(e, "reserved_time")}
          >
            8: 00 PM
          </option>
          <option
            value={reserved_time}
            onChange={e => handleChange(e, "reserved_time")}
          >
            9: 00 PM
          </option>
        </select>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          className="form-control"
          type="date"
          value={reserve_date}
          required={true}
          onChange={e => handleChange(e, "reserve_date")}
          placeholder="reserve_date"
        />
      </div>
      <button className="btn btn-primary">Add Reservation</button>
    </form>
  );
};

export default ReservationForm;

const Styles = {
  wildcard:{
    color:'red'
  }
}
