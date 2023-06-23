function Header() {
    return (
        <>
            <header className='flex justify-center my-3'>
                <div className='navbar rounded-xl flex justify-around items-center text-gray-200 p-6 shadow-zinc-600 w-[690px] bg-opacity-40 backdrop-blur-lg bg-slate-900'>
                    <a href='/' className='uppercase font-bold text-3xl'>
                        BloggerZ
                    </a>

                    <a
                        href='/login'
                        className='login w-24 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-lg p-2 px-3 hover:bg-gray-500 hover:text-white'
                    >
                        Login
                    </a>
                    {/* <a className='cursor-pointer w-32 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-lg p-2 px-3 hover:bg-gray-500'>
                        Zaid Ahmad
                    </a> */}
                </div>
            </header>
        </>
    )
}

export default Header
