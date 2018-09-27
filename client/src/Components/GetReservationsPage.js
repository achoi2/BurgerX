import React from "react";
import DisplayReservations from "./DisplayReservations";

class GetReservationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserved: []
    };
  }

  async componentDidMount() {
    const URL = "http://localhost:5000/api/reservations/";
    const response = await fetch(URL);
    const result = await response.json();
    this.setState({ reserved: result });
    console.log(this.state);
  }

  render() {
    const { reserved } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
        <DisplayReservations reserved={reserved} />
        </div>
      </div>
    )
  }
}

export default GetReservationsPage;
