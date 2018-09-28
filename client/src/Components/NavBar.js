import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
        <h3 className="text-white">BurgerX</h3>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="#">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
              <li className="nav-item"><Link to="/reservations" className="nav-link active">Reservations</Link></li>
              <li className="nav-item"><Link to="/menu" className="nav-link active">Menu</Link></li>
              <li className="nav-item"><Link to="/checkout" className="nav-link active">Checkout</Link></li>
              <li className="nav-item"><Link to="/admin" className="nav-link active">Admin</Link></li>
            </ul>
          </div>
        </div> 
      </nav> 
  )
}

export default NavBar;