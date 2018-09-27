import React from "react";

const AdminLoginForm = ({ email, user_password, handleChange, submitForm }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md">
          <form onSubmit={submitForm} className="form-group">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                value={email}
                placeholder="email"
                onChange={e => handleChange(e, "email")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={user_password}
                onChange={e => handleChange(e, "user_password")}
                placeholder="password"
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
