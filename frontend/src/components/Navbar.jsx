import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium relative z-50'>

      {/* Logo */}
      <img src={assets.swaglogo} className='w-36' alt='logo' />

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink to='/' end className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
      </ul>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='search'
        />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='profile' />
          <div className='hidden group-hover:block absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>
            10
          </p>
        </Link>

        {/* Menu Icon (mobile) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='menu'
        />
      </div>

      {/* Sidebar Menu (mobile) */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 overflow-hidden ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='back' />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/'>
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>
            Collection
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/about'>
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
