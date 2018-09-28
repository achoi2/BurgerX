import React from "react";
import { connect } from "react-redux";
import OrderPage from "./OrderPage";

const OrdersList = (props) => {
  let total = 0;
  props.cartItems.forEach(item => {
    total += item.price
    });
  

  let removeOrder = (item) => {
    props.dispatch({ type: 'REMOVE_ITEM', payload: item  })
  }
  return (
    <div>
      {props.cartItems.map(item => {
        return <li key={item.id}>
        {item.title}
        {item.price}
          <button onClick={() => removeOrder(item)} className="btn btn-danger">Remove</button>
        </li>
      })}
      <h3>Your total is ${total}</h3>
      <OrderPage/>
    </div>
  );
};

let OrdersView = connect(state => ({ cartItems: state.cartItems }))(OrdersList)

export default OrdersView;