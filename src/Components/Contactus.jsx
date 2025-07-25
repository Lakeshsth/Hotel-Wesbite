import React from 'react';
import { Link } from 'react-router-dom';
import Pic1 from '../assets/pic1.jpg';

function Contactus() {
  return (
    <>
      <div className='relative w-full h-[40rem]'>
        <img src={Pic1} alt="Background" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black/60 z-20"></div>
        <div className='absolute inset-0 z-30 flex flex-col justify-center items-center'>
          <ul className='flex justify-center items-center gap-5 text-white'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
          </ul>
          <h1 className='text-5xl text-white pt-5 uppercase font-bold'>Contact us</h1>
        </div>
      </div>

      <div className='w-full bg-[#f5f5f5] py-20 px-6 md:px-20 flex justify-center items-center'>
        <div className='bg-white shadow-lg rounded-2xl p-10 w-full max-w-6xl flex flex-col md:flex-row gap-10'>
          <div className='w-full md:w-1/2'>
            <img src={Pic1} className='w-full h-full object-cover rounded-xl' alt="Contact Visual" />
          </div>

          <div className='w-full md:w-1/2'>
            <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
            <form className='flex flex-col gap-4'>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#c5a880] text-white py-3 px-6 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
