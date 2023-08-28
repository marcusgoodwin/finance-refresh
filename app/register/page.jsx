const Register = () => {
  return (
    <div className='p-6 bg-gray-300 rounded-lg shadow-lg '>
      <form id='sign-up-form'>
        <h2 className='mb-4 text-lg font-medium text-gray-700'>Sign Up</h2>
        <div className='mb-4'>
          <label className='block mb-2 font-medium text-gray-600' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full p-2 text-black border border-gray-400 rounded-lg'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-medium text-gray-600' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full p-2 text-black border border-gray-400 rounded-lg'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-medium text-gray-600' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full p-2 text-black border border-gray-400 rounded-lg'
            type='password'
            id='password'
            name='password'
            required
          />
        </div>
        <div className='text-center'>
          <button className='p-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
