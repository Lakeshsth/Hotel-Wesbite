import React from 'react'
import Logo from '../assets/brand.webp'
import { CiShoppingCart, CiCircleChevDown, CiSearch } from "react-icons/ci";


function Header() {
  return (
    <header className="w-full bg-white h-16 shadow-xl px-9 flex justify-between items-center  sticky top-0 z-50">
    <img src={Logo} alt="Brand Logo" className="h-10" />
    <nav className='flex gap-9'>
        <ul className="gap-6 items-center hidden md:flex">
          <li>Home</li>
          <li>About </li>
          <li className='flex'>Services <span > <CiCircleChevDown className='text-2xl'  /> </span> </li>
          <li>Product</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className='flex gap-3 items-center'>
        <CiSearch className='text-2xl' />
        <CiShoppingCart className='text-2xl' />
        <button className='bg-amber-500 px-2 py-1 rounded text-white'>Book Now</button>
        </div>
      

    </nav>
  </header>
  
  )
}

export default Header
