import React from 'react'
import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full p-3 px-16 font-satoshi flex items-center justify-between'>
        <img src={Logo} alt='logo' className='w-14 h-14' />
        <div>
            <a href='#' className='ml-10 text-sm font-semibold text-black '>HOME</a>
            <a href='#' className='ml-10 text-sm font-semibold text-black '>ABOUT</a>
            <a href='#' className='ml-10 text-sm font-semibold text-black '>PROJECTS</a>
            <a href='#' className='ml-10 text-sm font-semibold text-black '>CONTACT</a>
            <button className='ml-10 text-sm font-semibold text-white bg-black px-7 py-3 rounded-full'>CHAT WITH ME</button>
        </div>
    </div>
  )
}

export default Navbar