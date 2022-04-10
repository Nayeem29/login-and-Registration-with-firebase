import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is Home</h2>
      {
        user && <p>{user.email}</p>
      }
    </div>
  );
};

export default Home;