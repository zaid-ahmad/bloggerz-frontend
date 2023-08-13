/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../authService.js'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  const submitForm = async () => {
    try {
      await login(username, password)
      navigateTo('/')
      // Redirect to the protected page or perform any other action
    } catch (error) {
      console.error(error)
      // Show an error message to the user
    }
  }
  return (
    <>
      <div className='flex items-center justify-center pt-20'>
        <div className='w-full max-w-xs flex flex-col items-center'>
          <form className='bg-slate-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 border-gray-700 border-4 w-96'>
            <h2 className='text-3xl font-semibold text-white pb-5'>Sign In</h2>
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={submitForm}
              >
                Sign In
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                href='/signup'
              >
                Sign Up here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
