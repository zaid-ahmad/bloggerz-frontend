import { getUserInfo } from '../authService.js'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from 'axios'

function ManageBlogs() {
  const [selectedOption, setSelectedOption] = useState('')
  const [blogs, setBlogs] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState('')
  const navigateTo = useNavigate()

  const redirectToCreate = () => {
    navigateTo(`blogs/create`)
  }

  const userInfo = getUserInfo()

  const handleSubmit = (event) => {
    event.preventDefault()

    Axios.get(
      `https://bloggerz-backend-production.up.railway.app/api/${userInfo.username}/blogs?published=${selectedOption}`
    )
      .then((response) => {
        const responseData = response.data
        console.log(responseData)
        setBlogs([...responseData])
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (event, id) => {
    event.preventDefault()
    console.log(id)
    Axios.delete(
      `https://bloggerz-backend-production.up.railway.app/api/blogs/${id}/delete`
    ).then((response) => {
      if (response.status === 200) {
        setShowNotification(true)
        setMessage('Blog deleted successfully')
      } else {
        setShowNotification(true)
        setMessage('Some error occurred')
      }
    })
  }

  const handleEdit = (event, id) => {
    event.preventDefault()
    ///:user/blogs/create
    navigateTo(`blogs/edit/${id}`)
  }

  useEffect(() => {
    Axios.get(
      `https://bloggerz-backend-production.up.railway.app/api/${userInfo.username}/blogs?published=op`
    ).then((response) => {
      const responseData = response.data
      setBlogs([...responseData])
    })
  }, [])

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
              <p>{message}</p>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col px-24 pt-3'>
        <h2 className='text-4xl text-gray-100 font-semibold'>
          Hello, {userInfo.name.split(' ')[0]}
        </h2>
        <form onSubmit={handleSubmit} className='pt-6 flex gap-3 items-center'>
          <select
            name='status'
            id='status'
            onChange={(e) => setSelectedOption(e.target.value)}
            className='w-40 rounded bg-slate-800 text-white px-4 py-2 cursor-pointer border-2 border-gray-700'
          >
            <option value='all'>All</option>
            <option value='yes'>Published</option>
            <option value='no'>Unpublished</option>
          </select>

          <button
            type='submit'
            className='w-14 h-9 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-md p-2 px-3 hover:bg-gray-500 hover:text-white'
          >
            Filter
          </button>
        </form>

        <div
          className='cursor-pointer w-36 h-9 mt-5 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-md p-2 px-3 hover:bg-gray-500 hover:text-white'
          onClick={redirectToCreate}
        >
          <p>Create A Blog</p>
        </div>

        <section className='flex flex-col gap-5 text-gray-200 mt-10'>
          {blogs.map((blog) => {
            if (blog) {
              const formattedDate = new Date(blog.timestamp).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }
              )

              return (
                <>
                  <div key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                      <div className='blog rounded-md p-3 w-62 bg-slate-800 border-4 border-gray-700'>
                        <div className='flex items-center gap-6'>
                          <h3 className='font-semibold text-xl py-2'>
                            {blog.title}
                          </h3>
                          <div className='flex gap-5'>
                            <button
                              className='underline'
                              onClick={(event) => {
                                handleEdit(event, blog._id)
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={(event) => {
                                handleDelete(event, blog._id)
                              }}
                              className='underline text-red-500'
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className='text-ellipsis pt-3 font-light'>
                          {blog.blog}
                        </p>
                        <div className='flex justify-between pt-5'>
                          <div className='postedby'>
                            <span className='text-neutral-400'>Status: </span>
                            <span className='text-neutral-400'>
                              {blog.published ? 'Published' : 'Unpublished'}
                            </span>
                          </div>
                          <div className='date'>
                            <span className='text-neutral-400'>
                              Posted on :{' '}
                            </span>
                            <span className='text-neutral-400'>
                              {formattedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )
            } else {
              return (
                <>
                  <h2>No blogs found.</h2>
                </>
              )
            }
          })}
        </section>
      </div>
    </>
  )
}

export default ManageBlogs
