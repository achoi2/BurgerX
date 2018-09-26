import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reservations">reservations</Link>
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