import React from "react";

const DeleteFromMenuForm = ({submitForm, handleChange , id}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Delete</div>
              <div className="card-text">
                <p>Select Item to be deleted based on its ID.</p>
                <form className="form-group" onSubmit={submitForm}>
                  <input
                    type="number"
                    name="id"
                    value={id}
                    onChange={e => handleChange(e, "id")}
                  />
                  <button className="btn btn-danger" >Delete</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteFromMenuForm;
