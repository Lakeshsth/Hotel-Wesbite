import React from 'react'
import Logo from '../assets/brand.webp'
import { CiShoppingCart, CiCircleChevDown, CiSearch } from "react-icons/ci";


function Header() {
  return (
    <header className="w-full bg-white h-16 shadow px-9 flex justify-between items-center">
    <img src={Logo} alt="Brand Logo" className="h-10" />
    <nav>
      <ul className="flex gap-6 items-center">
        <li>Home</li>
        <li>About </li>
        <li className='flex'>Services <span > <CiCircleChevDown className='text-2xl'  /> </span> </li>
        <li>Product</li>
        <li>Blog</li>
        <li>Contact</li>
        <CiSearch className='text-2xl' />
        <CiShoppingCart className='text-2xl' />

      </ul>

    </nav>
  </header>
  
  )
}

export default Header
