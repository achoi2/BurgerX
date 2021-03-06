import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AdminLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: ""
    };
  }

  render() {
    const { email, user_password } = this.state;
    const { dispatch } = this.props;

    let loginAdmin = async state => {
      await fetch(`http://localhost:5000/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };

    let submitForm = e => {
      e.preventDefault();
      loginAdmin(this.state);
      this.props.history.push("/management");
      dispatch({
        type: "REGISTER_ADMIN",
        adminReg: this.state
      });
    };

    return (
      <div className="container p-5">
        <div className="row justify-content-center registreForm bg-white">
          <div className="form-group">
            <label>
              Email <strong style={Styles.wildcard}>*</strong>
            </label>
            <form onSubmit={submitForm} className="form-group">
              <div>
                <input
                  type="email"
                  onChange={e => handleChange(e, "email")}
                  required={true}
                  value={email}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <strong style={Styles.wildcard}>*</strong>
                </label>
                <div>
                  <input
                    type="password"
                    onChange={e => handleChange(e, "user_password")}
                    required={true}
                    value={user_password}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Log in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectAdminPage = connect(state => ({
  admin: state.admin
}));
export default withRouter(ConnectAdminPage(AdminLoginPage));

const Styles = {
  wildcard: {
    color: "red"
  }
};
