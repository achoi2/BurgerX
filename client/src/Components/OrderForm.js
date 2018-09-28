import React from "react";

const OrderForm = ({
  client,
  phone,
  submitForm,
  handleChange
}) => {
  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={client}
          onChange={e => handleChange(e, "client")}
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <label>Number</label>
        <input
          className="form-control"
          type="tel"
          value={phone}
          onChange={e => handleChange(e, "phone")}
          placeholder="phone"
        />
      </div>
      <button className="btn btn-primary">Submit Order</button>
    </form>
  );
};

export default OrderForm;

