function BForm() {
    return (
        <>
            <section className='flex flex-col items-center pt-2'>
                <h2 className='text-white font-bold text-4xl pb-4'>
                    Create a Blog
                </h2>
                <div className='cat w-[70%] rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-[100%] '>
                        <form className='space-y-4 md:space-y-6' action='#'>
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
                                    id='title'
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
                                    rows='10'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <button
                                    type='submit'
                                    className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                                >
                                    Publish
                                </button>
                                <a
                                    href='/login'
                                    className='w-28 font-medium text-primary-600 hover:underline dark:text-primary-500'
                                >
                                    Save to drafts
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BForm
