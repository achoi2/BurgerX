import React from "react";
import { connect } from "react-redux";

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
      <div className="container">
        <div className="row justify-content-center">
          {this.state.menu.map(item => {
            return (
              <div className="card-deck" style={Styles.deck}>
                <div className="card" style={Styles.card}>
                  <img
                    class="card-img-top menu_items"
                    src={item.imageurl}
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="card-title">{item.title}</div>
                    <div className="card-text">
                      {item.details}
                      <div className="card-text">{item.price}</div>
                    </div>
                    <button style={Styles.like}>{`${item.thumbsup}👍`}</button>
                    <button
                    className="btn btn-primary"
                      onClick={() =>
                        this.props.dispatch({ type: "ADD", payload: item })
                      }
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ menu: state.menu }))(MenuPage);

const Styles = {
  deck:{
    padding:'1rem',
  },
  card:{
    width:'15rem',
    height:'25rem'
  },
  like: {
    padding:'0.3rem',
    marginRight:'0.5rem'
  }
}

