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
    <div className="container justify-content-center">
      <div className="text-center mt-3">
          <h1>Place Takeout Order</h1>
        </div>
      {props.cartItems.map(item => {
        return <h3 key={item.id} className="bg-light mb-3" style={{width:'30%'}}>
        {`${item.title} - $${item.price}`}
          <button onClick={() => removeOrder(item)} className="btn-sm btn-danger m-3">Remove</button>
        </h3>
      })}
      <h3>Your total is ${total}</h3>
      <OrderPage/>
    </div>
  );
};

let OrdersView = connect(state => ({ cartItems: state.cartItems }))(OrdersList)

export default OrdersView;