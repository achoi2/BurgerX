import React from "react";
import DisplayOrders from "./DisplayOrders";

class GetOrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  async componentDidMount() {
    const URL = "http://localhost:5000/api/orders/";
    const response = await fetch(URL);
    const result = await response.json();
    this.setState({ orders: result });
    console.log(this.state);
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
        <DisplayOrders orders={orders} />
        </div>
      </div>
    )
  }
}

export default GetOrdersPage;
