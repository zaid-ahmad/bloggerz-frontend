import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

import { getUserInfo } from '../authService.js'
import Header from './Header.jsx'

function BlogEdit() {
  const [title, setTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [showError, setShowError] = useState(false)
  const [message, setMessage] = useState('')
  const [err, setErr] = useState('')

  const userInfo = getUserInfo()
  const navigateTo = useNavigate()
  const { id } = useParams()

  const cleanseData = (title, blogContent, publishedStatus) => {
    if (title.length > 0 && blogContent.length > 0) {
      return {
        title,
        blog: blogContent,
        published: publishedStatus,
        author: userInfo.username,
      }
    }
  }

  const publish_blog = async () => {
    const updatedPublishedStatus = true
    const blog_data = cleanseData(title, blogContent, updatedPublishedStatus)

    Axios.put(
      `https://bloggerz-backend-production.up.railway.app/api/blogs/${id}/update`,
      blog_data
    )
      .then((response) => {
        if (response.status === 200) {
          setMessage('Blog updated successfully')
          setShowNotification(true)
        }
      })
      .catch((err) => {
        if (err.request.status === 422) {
          if (title.length > 60) {
            setShowError(true)
            setErr('Title is too long')
          } else {
            setShowError(true)
            setErr('Title is too short')
          }
        } else {
          console.log(err.message)
        }
      })
  }

  const unpublish_blog = async () => {
    const updatedPublishedStatus = false
    const blog_data = cleanseData(title, blogContent, updatedPublishedStatus)

    Axios.put(
      `https://bloggerz-backend-production.up.railway.app/api/blogs/${id}/update`,
      blog_data
    )
      .then((response) => {
        if (response.status === 200) {
          setMessage('Blog saved to drafts.')
          setShowNotification(true)
        }
      })
      .catch((err) => {
        if (err.request.status === 422) {
          if (title.length > 60) {
            setShowError(true)
            setErr('Title is too long')
          } else {
            setShowError(true)
            setErr('Title is too short')
          }
        } else {
          console.log(err.message)
        }
      })
  }
  const resetError = () => {
    setErr('')
  }

  useEffect(() => {
    if (showNotification) {
      // Wait for a few seconds to display the success notification
      const timer = setTimeout(() => {
        setShowNotification(false)
        navigateTo('/')
      }, 2000)

      // Clean up the timer if the component unmounts or the notification is dismissed early
      return () => clearTimeout(timer)
    }
    Axios.get(
      `https://bloggerz-backend-production.up.railway.app/api/blogs/${id}`
    ).then((response) => {
      const response_data = response.data
      setTitle(response_data.title)
      setBlogContent(response_data.blog)
    })
  }, [showNotification, navigateTo, id])

  return (
    <>
      <Header />
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
              <p>{message}</p>
              <p className='text-xs mt-1'>Redirecting...</p>
            </div>
          </div>
        </div>
      )}

      {err && (
        <div className='float-right mr-6 mt-[-95px] h-20 w-80'>
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
            <div className='ml-3 text-sm font-medium'>{err}</div>
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

      <section className='flex flex-col items-center pt-2'>
        <h2 className='text-white font-bold text-4xl my-4 pb-5'>Update Blog</h2>
        <div className='cat w-[70%] rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-[100%] '>
            <div className='space-y-4 md:space-y-6'>
              <div>
                <label
                  htmlFor='title'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Blog Title
                </label>
                <input
                  type='text'
                  name='title'
                  onChange={(e) => setTitle(e.target.value)}
                  id='title'
                  value={title}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='blog'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Blog Content
                </label>
                <textarea
                  type='text'
                  name='blog'
                  id='blog'
                  cols='30'
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  rows='10'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex flex-col gap-3'>
                <button
                  onClick={publish_blog}
                  className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Update & publish
                </button>
                <button
                  onClick={unpublish_blog}
                  className='cursor-pointer w-44 font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Update & save to drafts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogEdit
