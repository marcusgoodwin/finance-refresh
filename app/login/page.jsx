const Login = () => {
  return (
    <div className='p-6 mb-3 bg-gray-300 rounded-lg shadow-lg '>
      <h2 className='mb-4 text-lg font-medium text-gray-700'>Log In</h2>
      <div className='mb-4'>
        <label className='block mb-2 font-medium text-gray-600' htmlFor='email'>
          Email
        </label>
        <input
          className='w-full p-2 border border-gray-400 rounded-lg'
          type='email'
          id='login-email'
          name='login-email'
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 font-medium text-gray-600' htmlFor='password'>
          Password
        </label>
        <input
          className='w-full p-2 border border-gray-400 rounded-lg'
          type='password'
          id='login-password'
          name='login-password'
          required
        />
      </div>
      <div className='text-center'>
        <button id='submit' className='p-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800'>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
