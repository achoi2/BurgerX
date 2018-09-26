import React, { Component } from "react";
import AdminLoginForm from "./AdminLoginForm";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';

class AdminLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: ""
    };
  }

  render() {
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
      dispatch({
        type: "REGISTER_ADMIN",
        adminReg: this.state,
      });
      this.props.hitory.push('/management');
    };

    const { email, user_password } = this.state;
    const { dispatch } = this.props;
    return <AdminLoginForm email={email} user_password={user_password} submitForm={submitForm} handleChange={handleChange} />;
  }
}

const ConnectAdminPage = connect(state => ({
  admin: state.admin
}));
export default ConnectAdminPage(AdminLoginPage);
