import React from 'react';
import {connect} from 'react-redux';

// const MenuPage = (props) => {
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         {
//           props.menu.map(item =>
//             <li key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.details}</p>
//               <h3>{`$${item.price}`}</h3>
//               <button>{`${item.thumbsup}👍`}
//               </button>
//               <button onClick={ () =>
//                 props.dispatch({type: "ADD", payload: item})
//               }>Add to Order
//               </button>
//             </li> 
//           )
//         }
//       </ul>
//     </div>
//   )
// };
class MenuPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menu: []
      };
    }
  
    async componentDidMount() {
      const URL = "http://localhost:5000/api/menu/";
      const response = await fetch(URL);
      const result = await response.json();
      this.setState({ menu: result });
      console.log(this.state);
    }
  
    render() {
      return (
        <div>
          <h1>Menu</h1>
          <ul>
            {
              this.state.menu.map(item =>
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.details}</p>
                  <h3>{`$${item.price}`}</h3>
                  <button>{`${item.thumbsup}👍`}
                  </button>
                  <button onClick={ () =>
                    this.props.dispatch({type: "ADD", payload: item})
                  }>Add to Order
                  </button>
                </li> 
              )
            }
          </ul>
        </div>
      )
    }
  };

export default connect( (state) => ({menu : state.menu}) )(MenuPage);