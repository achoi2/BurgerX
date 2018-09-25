import React from "react";
import { connect } from "react-redux";
import Form from "../Form";

class ReservationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      partySize: []
    };
  }

  render() {
    const { name, phone, partySize } = this.state;
    const { dispatch } = this.props;

    let handleChange = (e, updated) => {
      let newState = {};
      newState[updated] = e.target.value;
      this.setState(newState);
    };

    let submitForm = e => {
      e.preventDefault();
      dispatch({
        type: "RESERVE_TABLE",
        id: { name: name, phone: phone, partySize: partySize }
      });
    };

    return (
      <Form
        name={name}
        phone={phone}
        partySize={partySize}
        submitForm={submitForm}
        handleChange={handleChange}
      />
    );
  }
}

const ConnectReservationPage = connect(state => ({
  reservations: state.reservations
}));
export default ConnectReservationPage(ReservationPage);
