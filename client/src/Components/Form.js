import React from "react";

export default ({ name, phone, partySize, submitForm, handleChange }) => {
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={name}
        onChange={e => handleChange(e, "name")}
        placeholder="name"
      />
      <input
        type="text"
        value={phone}
        onChange={e => handleChange(e, "phone")}
        placeholder="phone"
      />
      <input
        type="text"
        placeholder="party size"
        value={partySize}
        onChange={e => handleChange(e, "partySize")}
      />
      <button>Add Reservation</button>
    </form>
  );
};
