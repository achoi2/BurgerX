import React from "react";

const AdminLoginForm = ({ email, user_password, handleChange, submitForm }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md">
          <div className="card">
            <div class="card-body">
              <form onSubmit={submitForm}>
                <input
                  type="text"
                  value={email}
                  placeholder="email"
                  onChange={e => handleChange(e, "email")}
                />
                <input
                  type="password"
                  value={user_password}
                  onChange={e => handleChange(e, "user_password")}
                  placeholder="password"
                />
                  <button className="btn btn-primary">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
