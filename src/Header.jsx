import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {
  RiMenu3Fill,
  RiCloseFill,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


  const [isOpen, setIsOpen] = useState(false);
  let [modelstatus,setModelstatus] = useState(false)
  return (
    <>
    <div className={`modeloverlay ${modelstatus?'modelshow':''}`} onClick={()=> setModelstatus(false)}></div>
    <div className={`modeldiv ${modelstatus?'showmodeldiv':''} `}>
      <div className='fixed right-3 z-500 top-2'>
      <span className='cursor-pointer p-1' onClick={()=> setModelstatus(false)}>&times;</span>
      </div>
      <div className="flex items-center justify-center  bg-gradient-to-br from-emerald-300 to- p-4">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg">
        <h1
          className="text-4xl mb-2 font-bold text-center text-gray-800 "
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Login
        </h1>

        <form action="/" method="post" className="space-y-6">
          {/* Username Field */}
          <div>
            <input
              type="text"
              name="uname"
              id="name"
              placeholder="Username"
              required
              className="w-full px-4 py-2 text-lg rounded-full border border-gray-400 focus:border-green-700 focus:outline-none shadow"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              name="psw"
              placeholder="Password"
              required
              className="w-full px-4 py-2 text-lg rounded-full border border-gray-400 focus:border-green-700 focus:outline-none shadow"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full hover:border border-green-800  shadow-lg focus:outline-none"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Login
            </button>
          </div>
        </form>

        {/* Additional Text */}
        <p
          className="mt-4 text-center text-gray-600 text-sm"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Don’t have an account?{" "}
          <span className="text-green-700 hover:underline hover:text-green-500 cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>

      
    </div>
    <div className=' lg:flex lg:justify-between lg:bg-transparent lg:align-baseline hidden'>
      <img className='h-[90px] w-[110px] rounded-full size-48 ' src=".\src\assets\logo123-removebg-preview.png" alt="" />
        <ul className='lg:flex lg:space-x-4 lg:py-8 lg:text-inherit '>
            <li className='font-serif font-semibold dark:hover:text-black pl-40 hover:text-black'><Link to = {'/'}> Home</Link></li>
            <li className='font-serif font-semibold dark:hover:text-black hover:text-black'><Link to={'/store'}>Products</Link></li>
            <li className='font-serif font-semibold dark:hover:text-black hover:text-black'><Link to={'/consult'}>consultencies</Link></li>
            <li className='font-serif font-semibold dark:hover:text-black hover:text-black'><Link to={'/About-us'}> About Us</Link></li>
            
        </ul>
        <div>
        </div>
        <div className='py-5'>
        <a onClick={toggleTheme} className="   fixed right-40   cursor-pointer  mr-2 mt-2.5 text-black  dark:text-white text-[1.3rem] ">{theme === "light" ? <RiMoonFill /> : <RiSunFill />} </a>
        
          <a className='pr-2 cursor-pointer  ' onClick={()=> setModelstatus(true)}>Login </a>
          <button className='bg-gradient-to-r from-orange-400 to-red-500 px-4 py-2 rounded-xl mr-2'>Join Us</button>
        </div>
    </div>
    <div className="w-full px-6 py-3 flex justify-between items-center bg-transparent  top-0 lg:hidden">
        <div className="flex items-center space-x-2">
        <div className="relative">
      {/* Navbar */}
      <div className=" p-4 flex justify-between items-center">
        
        {/* Menu Button for Mobile */}
        <div >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 25 25"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        
        
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-950 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 `}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none mb-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to = {'/'}>Home</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/store'}>Products</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/consult'}>consultencies</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/About-us'}> About Us</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
          <div className="text-lg font-bold"><Link to={'/'}>
          <img className='h-[90px] w-[110px] rounded-full size-48 ' src=".\src\assets\logo123-removebg-preview.png" alt="" />
</Link></div>
        </div>
        {/* Profile Icon */}
        <div className="w-10 h-10 rounded-full bg-white  flex items-center justify-center">
          {/* Placeholder for Profile Icon */}
          <div className="text-white text-xl">👤</div>
          
        </div>
      </div>
    </>
  )
}

export default Header

