import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/home">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;