import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav>
    <Link to='/' className='logo'>Lotus Forums</Link>
  </nav>;
}

export default Nav;
