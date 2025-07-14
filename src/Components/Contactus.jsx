import React from 'react'
import Pic1 from '../assets/pic1.jpg';

function Contactus() {
  return (
    <>
        <div className=' relative w-ful h-[40rem]'>
        <img src={Pic1} alt="" className='w-full h-full object-cover' />
        <div className="absolute  inset-0 bg-black/60 z-20"></div>
        <div className='absolute inset-0 z-30 flex flex-col justify-center items-center '>
            <div>
                <ul className='flex justify-center items-center gap-5 text-white'>
                <li>Home</li>
                <li>Contact</li>
            </ul>
            <h1 className='text-5xl text-white flex justify-center items-center pt-5 uppercase font-bold'>Contact us</h1>
                
            </div>
            
        </div>
        <div className='h-full w-full bg-[#00000009] mt-9 flex justify-end items-center'>
             <div className='bg-white shadow h-[90%] w-[90%] mx-auto border rounded-2xl flex items-center gap-2 '>

                <div className='h-[70%] w-[70%] '>

                </div>
                <img src={Pic1} className='h-full w-[50rem] mx-auto   ' alt="" />

    
            </div>
        </div>
        
        </div>
        
        

    </>
    
  )
}

export default Contactus
