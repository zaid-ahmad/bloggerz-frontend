//import { useParams } from 'react-router-dom'

function Blog() {
    // Blog ID
    // const { id } = useParams()

    return (
        <>
            <div className='flex justify-center pt-10'>
                <div className='w-[80%] blog rounded-md w-62 bg-slate-900 border-5 border-gray-700 p-8'>
                    <h3 className='font-semibold text-5xl py-2 text-gray-100'>
                        Introduction to Express JS
                    </h3>
                    <div className='flex justify-between pt-5'>
                        <div className='postedby'>
                            <span className='text-neutral-400'>By </span>
                            <span className='text-neutral-400'>Zaid Ahmad</span>
                        </div>
                        <div className='date'>
                            <span className='text-neutral-400'>
                                Aug 23, 2023
                            </span>
                        </div>
                    </div>
                    <p className='text-ellipsis pt-3 font-normal text-lg text-gray-100 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas explicabo repudiandae non vero illum nostrum ullam
                        sint necessitatibus, nulla dolor perferendis placeat
                        quod rerum, amet enim, dolorum magnam animi
                        molestiae.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quas explicabo repudiandae non vero
                        illum nostrum ullam sint necessitatibus, nulla dolor
                        perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas explicabo repudiandae
                        non vero illum nostrum ullam sint necessitatibus, nulla
                        dolor perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas explicabo repudiandae
                        non vero illum nostrum ullam sint necessitatibus, nulla
                        dolor perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas explicabo repudiandae
                        non vero illum nostrum ullam sint necessitatibus, nulla
                        dolor perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas explicabo repudiandae
                        non vero illum nostrum ullam sint necessitatibus, nulla
                        dolor perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas explicabo repudiandae
                        non vero illum nostrum ullam sint necessitatibus, nulla
                        dolor perferendis placeat quod rerum, amet enim, dolorum
                        magnam animi molestiae.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Blog
