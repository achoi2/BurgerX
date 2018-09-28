import React from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      phone: "",
      items: ""
    };
  }

  render() {
    console.log(this.state)
    const {
      client,
      phone,
      items
    } = this.state;
    const { dispatch } = this.props;

    let itemString = "";

    this.props.cartItems.forEach(item => {
        itemString+= `1 ${item.title}, `;
    })

    this.state = {
      ...this.state,
      items: itemString
    }

    console.log(this.state);
    
    let postOrder = async state => {
      await fetch("http://localhost:5000/api/orders/new", {
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
      console.log(this.state)
      e.preventDefault();
      postOrder(this.state);
      dispatch({
        type: "PLACE_ORDER",
        order: this.state
      });
    };

    return (
      <div className="container p-5">
      <div className="row justify-content-center reservationForm">
      <OrderForm
          client={client}
          phone={phone}
          items={items}
          submitForm={submitForm}
          handleChange={handleChange}
        />
      </div>
      </div>
    );
  }
}

const ConnectOrderPage = connect(state => ({
  cartItems: state.cartItems
}));
export default ConnectOrderPage(OrderPage);
