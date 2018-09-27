import React from "react";
import { connect } from "react-redux";
import Form from "./AddMenuForm";

class AddToMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageurl: "",
      details: "",
      price: 0,
      thumbsup: 0
    };
  }

  render() {
    const {
      title,
      imageurl,
      details,
      price,
      thumbsup
    } = this.state;
    const { dispatch } = this.props;

    let postNewItem = async state => {
      await fetch("http://localhost:5000/api/menu/newitem", {
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
      postNewItem(this.state);
      dispatch({
        type: "MENU_TABLE",
        newitem: this.state
      });
    };

    return (
      <div className="container">
      <div className="row justify-content-center">
      <Form
          title={title}
          imageurl={imageurl}
          details={details}
          price={price}
          thumbsup={thumbsup}
          submitForm={submitForm}
          handleChange={handleChange}
        />
      </div>
      </div>
    );
  }
}

const ConnectAddToMenuPage = connect(state => ({
  AddToMenus: state.reservations
}));

export default ConnectAddToMenuPage(AddToMenuPage);
