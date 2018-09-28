import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return <footer className="p-3 text-center text-white bg-secondary">
          <div>
            <p><Link to="/admin" class="admin">Admin Login</Link></p>
            <p>Copyright &copy; {new Date().getFullYear()} BurgerX</p>
          </div>
      </footer>;
}


