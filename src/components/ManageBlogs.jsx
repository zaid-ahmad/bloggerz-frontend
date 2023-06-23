function ManageBlogs() {
    return (
        <>
            <div className='flex flex-col px-24 pt-3'>
                <h2 className='text-4xl text-gray-100 font-semibold'>
                    Hello, Zaid
                </h2>
                <form
                    action=''
                    method='POST'
                    className='pt-6 flex gap-3 items-center'
                >
                    <select
                        name='status'
                        id='status'
                        className='w-40 rounded bg-slate-800 text-white px-4 py-2 cursor-pointer border-2 border-gray-700'
                    >
                        <option value='some_value'>All</option>
                        <option value='some_value'>Published</option>
                        <option value='some_value'>Unpublished</option>
                    </select>

                    <button
                        type='submit'
                        className='w-14 h-9 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-md p-2 px-3 hover:bg-gray-500 hover:text-white'
                    >
                        Filter
                    </button>
                </form>

                <section className='text-gray-200 mt-10'>
                    <div className='blog rounded-md p-3 w-62 bg-slate-800 border-4 border-gray-700'>
                        <div className='flex items-center gap-6'>
                            <h3 className='font-semibold text-xl py-2'>
                                Introduction to Express JS
                            </h3>
                            <div className='flex gap-5'>
                                <a href='#' className='underline'>
                                    Edit
                                </a>
                                <button className='underline'>Delete</button>
                            </div>
                        </div>

                        <p className='text-ellipsis pt-3 font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas explicabo repudiandae non vero illum
                            nostrum ullam sint necessitatibus, nulla dolor
                            perferendis placeat quod rerum, amet enim, dolorum
                            magnam animi molestiae.
                        </p>
                        <div className='flex justify-between pt-5'>
                            <div className='postedby'>
                                <span className='text-neutral-400'>
                                    Status:{' '}
                                </span>
                                <span className='text-neutral-400'>
                                    Published
                                </span>
                            </div>
                            <div className='date'>
                                <span className='text-neutral-400'>
                                    Posted on :{' '}
                                </span>
                                <span className='text-neutral-400'>
                                    Aug 23, 2023
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ManageBlogs
