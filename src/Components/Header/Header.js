import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : 'black',
      fontWeight: isActive ? 'bold' : 'normal'
    };
  }
  return (
    <div>
      <nav className='flex items-center justify-center text-2xl'>
        <NavLink to='/'
          style={navLinkStyles}
          className='m-3'
        >Home</NavLink>

        <NavLink to='/register'
          style={navLinkStyles}
          className='m-3'
        >Sign up</NavLink>

        <NavLink to='/login'
          style={navLinkStyles}
        >Sign in</NavLink>
      </nav>
    </div>
  );
};

export default Header;