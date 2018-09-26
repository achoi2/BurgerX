import React from 'react';
import {connect} from 'react-redux';

const MenuPage = (props) => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {
          props.menu.map(item =>
            <li key={item.id} className="card">
              <div className="card-body">
                <h2>{item.title}</h2>
                <p className="card-text">{item.details}</p>
                <h3>{`$${item.price}`}</h3>
                <button className="btn btn-light">{`${item.thumbsup}👍`}
                </button>
                <button onClick={() =>
                  props.dispatch({ type: "ADD", payload: item })
                } className="btn btn-dark">Add to Order
              </button>
              </div> 
            </li> 
          )
        }
      </ul>
    </div>
  )
};

export default connect( (state) => ({menu : state.menu}) )(MenuPage);