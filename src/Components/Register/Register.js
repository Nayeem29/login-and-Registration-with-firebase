import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailField = event => {
    setEmail(event.target.value);
  }
  const handlePasswordField = event => {
    setPassword(event.target.value);
  }
  const handleConfirmPasswordField = event => {
    setConfirmPassword(event.target.value);
  }

  const handleCreateUserInfo = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Password does not match!!');
      return;
    }
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
    // console.log(user);
  }

  if (user) {
    navigate('/login');
    console.log(user);
  }
  return (
    <div className='flex items-center justify-center bg-slate-60 h-auto'>
      <section id='form' className='block p-6 mt-5 bg-slate-50 rounded-lg shadow-md shadow-slate-300 w-90 '>
        <form onSubmit={handleCreateUserInfo} action="" className='mt-5 '>
          <h2 className='text-3xl font-semibold text-blue-700 my-4'>Register</h2>
          <div className='flex flex-row'>
            <div id='fName' className='w-1/2 mr-1'>
              <label htmlFor="fname" className=' text-sm'> First Name</label>
              <input type="text" id='fname' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
            </div>
            <div id='lName' className='w-1/2 mr-1'>
              <label htmlFor="lname" className='text-sm'> Last Name</label>
              <input type="text" id='lname' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
            </div>
          </div>
          {/* email */}
          <label htmlFor="email" className=' text-sm'> Email</label>
          <input onBlur={handleEmailField} type="email" id='email' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* password  */}
          <label htmlFor="password" className=' text-sm'> Password</label>
          <input onBlur={handlePasswordField} type="password" id='password' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* confirm password  */}
          <label htmlFor="password" className=' text-sm'> Confirm Password</label>
          <input onBlur={handleConfirmPasswordField} type="password" id='confirm-password' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* submit button  */}
          <input type="submit" value="Submit" className='mt-2 h-12 bg-blue-600 w-full cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
          <p>{error}</p>

          <div className='flex items-center justify-between'>
            <input type="submit" value="Sign up with Google" className='mt-2 h-12 bg-blue-600 w-1/2 cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
            <input type="submit" value="Sign up with Github" className='mt-2 h-12 bg-blue-600 w-1/2 cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
          </div>
          <p className='my-2 text-xm'>Already have an account?
            <Link to='/Login' className='text-blue-600 pl-2'>Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;