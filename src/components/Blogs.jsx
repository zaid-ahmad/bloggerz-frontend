import Axios from 'axios'
import { useEffect, useState } from 'react'

function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    Axios.get('https://bloggerz-backend-production.up.railway.app/api/blogs')
      .then((response) => {
        const responseData = response.data
        setBlogs([...responseData])
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <section className='grid grid-cols-3 m-12 text-gray-200 gap-5'>
        {blogs.map((blog) => {
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
              <a href={`/blogs/${blog._id}`}>
                <div className='flex flex-col justify-center blog rounded-md p-3 h-60 bg-slate-800 hover:bg-slate-700 border-4 border-gray-700'>
                  <h3 className='font-semibold text-xl py-2'>
                    {blog.title.slice(0, 41) + '...'}
                  </h3>
                  <p className='text-ellipsis pt-3 font-light w-62'>
                    {blog.blog.slice(0, 220) + '...'}
                  </p>
                  <div className='flex justify-between pt-5'>
                    <div className='postedby'>
                      <span className='text-neutral-400'>By </span>
                      <span className='text-neutral-400'>
                        {blog.author.name}
                      </span>
                    </div>
                    <div className='date'>
                      <span className='text-neutral-400'>{formattedDate}</span>
                    </div>
                  </div>
                </div>
              </a>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Blogs
