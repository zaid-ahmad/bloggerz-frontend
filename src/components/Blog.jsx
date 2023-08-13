import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

function Blog() {
  const [blog, setBlog] = useState({})
  const { id } = useParams()

  useEffect(() => {
    Axios.get(
      `https://bloggerz-backend-production.up.railway.app/api/blogs/${id}`
    )
      .then((response) => {
        setBlog(response.data)
      })
      .catch((err) => console.error(err))
  }, [id])

  const formattedDate = new Date(blog.timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  // Add a conditional check before accessing blog.author.name
  const authorName = blog.author ? blog.author.name : ''

  return (
    <>
      <div className='flex justify-center pt-10'>
        <div className='w-[80%] blog rounded-md w-62 bg-slate-900 border-5 border-gray-700 p-8'>
          <h3 className='font-semibold text-5xl py-2 text-gray-100'>
            {blog.title}
          </h3>
          <div className='flex justify-between pt-5'>
            <div className='postedby'>
              <span className='text-neutral-400'>By </span>
              <span className='text-neutral-400'>{authorName}</span>
            </div>
            <div className='date'>
              <span className='text-neutral-400'>{formattedDate}</span>
            </div>
          </div>
          <p className='text-ellipsis pt-3 font-normal text-lg text-gray-100 leading-7'>
            {blog.blog}
          </p>
        </div>
      </div>
    </>
  )
}

export default Blog
