function Blogs() {
    return (
        <>
            <section className='grid grid-cols-3 m-12 text-gray-200 gap-5'>
                <a href='/blogs/2'>
                    <div className='blog rounded-md p-3 w-62 bg-slate-800 hover:bg-slate-700 border-4 border-gray-700'>
                        <h3 className='font-semibold text-xl py-2'>
                            Introduction to Express JS
                        </h3>
                        <p className='text-ellipsis pt-3 font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas explicabo repudiandae non vero illum
                            nostrum ullam sint necessitatibus, nulla dolor
                            perferendis placeat quod rerum, amet enim, dolorum
                            magnam animi molestiae.
                        </p>
                        <div className='flex justify-between pt-5'>
                            <div className='postedby'>
                                <span className='text-neutral-400'>By </span>
                                <span className='text-neutral-400'>
                                    Zaid Ahmad
                                </span>
                            </div>
                            <div className='date'>
                                <span className='text-neutral-400'>
                                    Aug 23, 2023
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Blogs
