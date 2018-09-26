import React from "react";

const ReservationForm =  ({ client,phone,party_size,reserve_date,reserved_time, submitForm, handleChange }) => {
  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <input
          type="text"
          value={client}
          onChange={e => handleChange(e, "client")}
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={phone}
          onChange={e => handleChange(e, "phone")}
          placeholder="phone"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="party size"
          value={party_size}
          onChange={e => handleChange(e, "party_size")}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={reserved_time}
          onChange={e => handleChange(e, "reserved_time")}
          placeholder="reserve_time"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={reserve_date}
          onChange={e => handleChange(e, "reserve_date")}
          placeholder="reserve_date"
        />
      </div>  
      <button className="btn btn-primary">Add Reservation</button>
    </form>
  );
};

export default ReservationForm;