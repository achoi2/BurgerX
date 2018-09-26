import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li><Link to="/" className="nav-link active">Home</Link></li>
        <li><Link to="/reservations" className="nav-link active">Reservations</Link></li>
        <li><Link to="/menu" className="nav-link active">Menu</Link></li>
        <li><Link to="/checkout" className="nav-link active">Checkout</Link></li>
        <li><Link to="/reserved" className="nav-link active">Reserved</Link></li>
        <li><Link to="/admin" className="nav-link active">Log In</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;