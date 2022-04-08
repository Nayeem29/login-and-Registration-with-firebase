import React from 'react';

const Register = () => {
  return (
    <div className='flex items-center justify-center bg-slate-500 h-screen'>
      <section id='form' className='block p-6 mt-5 bg-slate-50 rounded-lg shadow-md shadow-slate-300 w-90 '>
        <form action="" className='mt-5 '>
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
          <input type="email" id='email' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* password  */}
          <label htmlFor="password" className=' text-sm'> Password</label>
          <input type="password" id='password' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* confirm password  */}
          <label htmlFor="password" className=' text-sm'> Confirm Password</label>
          <input type="password" id='password' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          <input type="submit" value="Submit" className='mt-2 h-12 bg-blue-600 w-full cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
          <p className='my-2 text-xm'>Already have an account?
            <a href="#" className='text-blue-600 pl-2'>Login</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;