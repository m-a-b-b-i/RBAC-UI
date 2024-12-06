// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/users">Manage Users</Link> | 
      <Link to="/roles">Manage Roles</Link>
    </nav>
  );
};

export default Navbar;
