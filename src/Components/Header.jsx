import React, { useState } from 'react';
import Lak from '../assets/Logolak.png';
import { CiShoppingCart, CiSearch, CiMenuFries } from "react-icons/ci";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="w-full bg-white h-16 shadow-xl px-6 md:px-9 flex justify-between items-center sticky top-0 z-50">
      <Link to="/">
        <img src={Lak} alt="Brand Logo" className="h-10 cursor-pointer" />
      </Link>

      <nav className="hidden md:flex gap-9 items-center">
        <ul className="flex gap-6 items-center">
          <li><a href="/">Home</a></li>
          <li>
            <ScrollLink to="about-section" smooth duration={500} offset={-70} className="cursor-pointer">About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="services-section" smooth duration={500} offset={-70} className="cursor-pointer">Services</ScrollLink>
          </li>
          <li>
            <ScrollLink to="card-section" smooth duration={500} offset={-70} className="cursor-pointer">Rooms</ScrollLink>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>

      <div className='hidden md:flex gap-3 items-center'>
        <CiSearch className='text-2xl cursor-pointer' />
        <CiShoppingCart className='text-2xl cursor-pointer' />
        <button className='bg-[#c5a880] px-2 py-1 rounded text-white'>Book Now</button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-3xl focus:outline-none"
        >
          <CiMenuFries />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden z-50">
          <ul className="flex flex-col gap-6 py-6 text-lg w-full px-6">
            <li>
              <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services-section"
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="card-section"
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </ScrollLink>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact us</Link>
            </li>
            <li>
              <button className='bg-[#c5a880] px-4 py-2 rounded text-white w-full'>Book Now</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
