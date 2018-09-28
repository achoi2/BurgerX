import React from "react";
import { connect } from "react-redux";
import ReservationTimeInput from "./ReusableForms";

class ReservationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      phone: "",
      party_size: 0,
      reserve_date: "",
      reserved_time: ""
    };
  }

  render() {
    const {
      client,
      phone,
      party_size,
      reserve_date,
      reserved_time
    } = this.state;
    const { dispatch } = this.props;

    let postReservation = async state => {
      await fetch("http://burgerx.fun:5000/api/reservations/reserve", {
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
      postReservation(this.state);
      dispatch({
        type: "RESERVE_TABLE",
        reserve: this.state
      });
    };

    return (
      <div className="container p-5">
      <div className="text-center mt-3">
          <h1>Reserve a Table</h1>
        </div>
        <div className="row justify-content-center reservationForm">
          <div className="form-group">
            <label>
              Name <strong style={Styles.wildcard}>*</strong>
            </label>
            <form onSubmit={submitForm} className="form-group">
              <div>
                <input
                  type="text"
                  value={client}
                  required={true}
                  onChange={e => handleChange(e, "client")}
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Phone <strong style={Styles.wildcard}>*</strong>
                </label>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    required={true}
                    onChange={e => handleChange(e, "phone")}
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <label>Party Size</label>
                <div>
                  <input
                    type="number"
                    placeholder="party size"
                    value={party_size}
                    onChange={e => handleChange(e, "party_size")}
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <ReservationTimeInput
                  value={reserved_time}
                  required={true}
                  onChange={e => handleChange(e, "reserved_time")}
                  className="form-control"
                />
              </div>
              <div>
                <label>
                  Date <strong style={Styles.wildcard}>*</strong>
                </label>
                <div>
                  <input
                    type="date"
                    value={reserve_date}
                    required={true}
                    onChange={e => handleChange(e, "reserve_date")}
                    className="form-control"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Add Reservation</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectReservationPage = connect(state => ({
  reservations: state.reservations
}));
export default ConnectReservationPage(ReservationPage);

const Styles = {
  wildcard: {
    color: "red"
  }
};
