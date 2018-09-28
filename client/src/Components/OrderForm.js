import React from "react";

const OrderForm = ({
  client,
  phone,
  submitForm,
  handleChange
}) => {
  return (
    <form onSubmit={submitForm}>
      <div className="form-group text-white">
        <label>Full Name</label>
        <input
          className="form-control"
          type="text"
          value={client}
          onChange={e => handleChange(e, "client")}
          placeholder="enter name here"
        />
      </div>
      <div className="form-group text-white">
        <label>Phone Number</label>
        <input
          className="form-control"
          type="tel"
          value={phone}
          onChange={e => handleChange(e, "phone")}
          placeholder="(000) 000-0000"
        />
      </div>
      <button className="btn btn-primary">Submit Order</button>
    </form>
  );
};

export default OrderForm;

