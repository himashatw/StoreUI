import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">
      Admin
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/items" className="nav-link">
            View Items
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/additem" className="nav-link">
            Add Item
          </Link>
        </li>
      </ul>
    </div>
  </nav>);

export default NavBar;