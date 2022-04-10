import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../_firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }
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
        <NavLink to='/products'
          style={navLinkStyles}
          className='m-3'
        >Products</NavLink>

        <NavLink to='/register'
          style={navLinkStyles}
          className='m-3'
        >Sign up</NavLink>

        {
          user ?
            <button onClick={logOut}>Sign Out</button>
            :
            <NavLink to='/login'
              style={navLinkStyles}
            >Sign in</NavLink>}
      </nav>
    </div>
  );
};

export default Header;