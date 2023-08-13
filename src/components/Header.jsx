/* eslint-disable react/prop-types */
import { isLoggedIn, getUserInfo, logout } from '../authService.js'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '../assets/logout.png'

function Header() {
  const navigateTo = useNavigate()
  const userInfo = getUserInfo()

  const handleLogout = () => {
    logout()
    navigateTo('/')
  }
  if (isLoggedIn()) {
    return (
      <>
        <header className='flex justify-center my-3'>
          <div className='navbar rounded-xl flex justify-around items-center text-gray-200 p-6 shadow-zinc-600 w-[690px] bg-opacity-40 backdrop-blur-lg bg-slate-900'>
            <a href='/' className='uppercase font-bold text-3xl'>
              BloggerZ
            </a>

            <div className='flex items-center gap-5'>
              <a
                href={`/${userInfo.username}`}
                className='cursor-pointer w-32 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-lg p-2 px-3 hover:bg-gray-500'
              >
                {userInfo.name}
              </a>
              <div className='cursor-pointer' onClick={handleLogout}>
                <img src={LogoutIcon} alt='Logout' className='w-5' />
              </div>
            </div>
          </div>
        </header>
      </>
    )
  } else {
    return (
      <>
        <header className='flex justify-center my-3'>
          <div className='navbar rounded-xl flex justify-around items-center text-gray-200 p-6 shadow-zinc-600 w-[690px] bg-opacity-40 backdrop-blur-lg bg-slate-900'>
            <a href='/' className='uppercase font-bold text-3xl'>
              BloggerZ
            </a>

            <div className='flex gap-2'>
              <a
                href='/signup'
                className='login w-24 bg-gray-200 bg-opacity-25 rounded text-slate-300 font-semibold flex justify-center items-center text-md p-2 px-3 hover:bg-gray-500 hover:text-white'
              >
                Sign Up
              </a>
              <a
                href='/signin'
                className='login w-24 bg-gray-200 bg-opacity-10 rounded text-slate-300 font-semibold flex justify-center items-center text-md p-2 px-3 hover:bg-gray-500 hover:text-white'
              >
                Sign In
              </a>
            </div>
            {/* <a className='cursor-pointer w-32 bg-gray-200 bg-opacity-20 rounded text-slate-300 font-semibold flex justify-center items-center text-lg p-2 px-3 hover:bg-gray-500'>
                          Zaid Ahmad
                      </a> */}
          </div>
        </header>
      </>
    )
  }
}

export default Header
