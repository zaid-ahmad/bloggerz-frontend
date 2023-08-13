import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

function RegisterForm() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState('')
  const navigateTo = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name.length > 0 && username.length > 0 && password.length > 0) {
      const user = {
        name,
        username,
        password,
      }
      // Do input validation before sending the data to the backend

      Axios.post(
        'https://bloggerz-backend-production.up.railway.app/api/signup',
        user
      )
        .then((response) => {
          if (response.status === 200) {
            // display a success notification
            setShowNotification(true)
          }
        })
        .catch((err) => {
          console.log(err)
          setError('Username already exists')
        })
    } else {
      setError('Please fill in the entire form')
    }
  }

  const resetError = () => {
    setError('')
  }

  useEffect(() => {
    if (showNotification) {
      // Wait for a few seconds to display the success notification
      const timer = setTimeout(() => {
        setShowNotification(false)
        navigateTo('/signin')
      }, 2000)

      // Clean up the timer if the component unmounts or the notification is dismissed early
      return () => clearTimeout(timer)
    }
  }, [showNotification, navigateTo])

  return (
    <>
      {showNotification && (
        <div className='float-right mr-6 mt-[-95px] h-20'>
          <div
            id='alert-border-3'
            className='flex rounded items-center p-5 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800'
          >
            <svg
              className='flex-shrink-0 w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
            </svg>
            <div className='ml-3 text-sm font-medium'>
              <p>Wohoo! Account Created Successfully.</p>
              <p className='text-xs mt-1'>Redirecting...</p>
            </div>
            <button
              type='button'
              className='ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700'
              data-dismiss-target='#alert-border-3'
              aria-label='Close'
            ></button>
          </div>
        </div>
      )}

      {error && (
        <div className='float-right mr-6 mt-[-95px] h-20'>
          <div
            id='alert-border-4'
            className='flex items-center rounded p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800'
            role='alert'
          >
            <svg
              className='flex-shrink-0 w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
            </svg>
            <div className='ml-3 text-sm font-medium'>{error}</div>
            <button
              type='button'
              className='ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700'
              onClick={resetError}
              data-dismiss-target='#alert-border-4'
              aria-label='Close'
            >
              <span className='sr-only'>Dismiss</span>
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section className='flex flex-col items-center pt-6'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6' method='POST'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your full name
                </label>
                <input
                  type='text'
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Emelia Erickson'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  onChange={(e) => setUsername(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='emelia_erickson24'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <button
                type='submit'
                onClick={handleSubmit}
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <Link
                  to='/signin'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterForm
