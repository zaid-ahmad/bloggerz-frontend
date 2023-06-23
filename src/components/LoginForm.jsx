function LoginForm() {
    return (
        <>
            <div className='flex items-center justify-center pt-20'>
                <div className='w-full max-w-xs flex flex-col items-center'>
                    <form className='bg-slate-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 border-gray-700 border-4 w-96'>
                        <h2 className='text-3xl font-semibold text-white pb-5'>
                            Login
                        </h2>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-300 text-sm font-bold mb-2'
                                htmlFor='username'
                            >
                                Username
                            </label>
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                id='username'
                                type='text'
                                placeholder='Username'
                            />
                        </div>
                        <div className='mb-6'>
                            <label
                                className='block text-gray-300 text-sm font-bold mb-2'
                                htmlFor='password'
                            >
                                Password
                            </label>
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                id='password'
                                type='password'
                                placeholder='******************'
                            />
                            {/* <p className='text-red-500 text-xs italic'>
                                some error message
                            </p> */}
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='button'
                            >
                                Sign In
                            </button>
                            <a
                                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                                href='/register'
                            >
                                Register here
                            </a>
                        </div>
                    </form>

                    <h3 className='text-white font-bold text-2xl pb-6'>Or</h3>

                    <button
                        type='button'
                        className='rounded h-9 w-64 transition duration-300 bg-white hover:shadow-md active:bg-gray-200 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-gray-300 disabled:filter disabled:grayscale'
                    >
                        <span className='google inline-block w-4 h-4 mr-2 bg-no-repeat bg-center bg-cover'></span>
                        <span className='text-gray-700 text-sm font-medium'>
                            Sign in with Google
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginForm
