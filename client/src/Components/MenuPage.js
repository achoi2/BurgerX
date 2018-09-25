import React from 'react';
import {connect} from 'react-redux';

const MenuPage = (props) => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {
          props.menu.map(item =>
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
              <h3>{`$${item.price}`}</h3>
              <p>{`${item.thumbsup}👍`}</p>
              <button onClick={ () =>
                props.dispatch({type: "ADD", payload: item.id})
              }>Add to Order
              </button>
            </li> 
          )
        }
      </ul>
    </div>
  )
};

export default connect( (state) => ({menu : state.menu}) )(MenuPage);