import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li>
          <Link to="/reservations" className="nav-link active">Reservations</Link>
        </li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/reserved">Reserved</Link></li>
        <li><Link to="/admin">Log In</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;