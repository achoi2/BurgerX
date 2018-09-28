import React from "react";

const AddMenuForm =  ({ title,imageurl,details,price,thumbsup, submitForm, handleChange }) => {
  return (
    <div className="container p-5">
      <div className="row justify-content-center AddMenuForm">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={e => handleChange(e, "title")}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={imageurl}
              onChange={e => handleChange(e, "imageurl")}
              placeholder="imageurl"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="details"
              value={details}
              onChange={e => handleChange(e, "details")}
            />
          </div>
          <div className="form-group">
            <input
              type="price"
              value={price}
              onChange={e => handleChange(e, "price")}
              placeholder="price"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              value={thumbsup}
              onChange={e => handleChange(e, "thumbsup")}
              placeholder="thumbsup"
            />
          </div>
          <button className="btn btn-primary">Add Menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuForm;