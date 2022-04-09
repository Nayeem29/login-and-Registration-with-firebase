import React from 'react';

const Login = () => {
  return (
    <div>

      <section id='form' className='block p-6 mt-5 bg-slate-50 rounded-lg shadow-md shadow-slate-300 w-1/2 flex items-center justify-center mx-auto my-auto'>
        <form action="" className='mt-5 '>
          <h2 className='text-3xl font-semibold text-blue-700 my-4'>Login here!!!</h2>
          {/* email */}
          <label htmlFor="email" className=' text-sm'> Email</label>
          <input type="email" id='email' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          {/* password  */}
          <label htmlFor="password" className=' text-sm'> Password</label>
          <input type="password" id='password' className='w-full h-8 border rounded-lg border-slate-300 pl-2 outline-blue-600 bg-transparent' />
          <input type="submit" value="Login" className='mt-2 h-12 bg-blue-600 w-full cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
          <div className='flex items-center justify-between'>
            <input type="submit" value="Sign in with Google" className='mt-2 px-2 h-12 bg-blue-600 w-auto cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
            <input type="submit" value="Sign in with Github" className='mt-2 ml-auto px-2 h-12 bg-blue-600 w-auto cursor-pointer border rounded-md text-white hover:bg-blue-700 hover:outline outline-2 outline-blue-400 outline-offset-2 text-xl' /> <br />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;