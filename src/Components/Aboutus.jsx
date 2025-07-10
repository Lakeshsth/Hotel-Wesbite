import React from 'react'
import Pic4 from '../assets/pic4.jpg';

function Aboutus() {
  return (
    <>
    <div className='w-full  mt-[6rem] flex justify-center items-center px-15 '>
        <div className='md:flex justify-center gap-10 items-center '>
            <img className='w-[100%] md:w-[40%] mx-auto rounded-2xl shadow-xl' src={Pic4} alt="" />
            <div className='text-center md:text-start bg-[#3d414409] rounded shadow mt-5'>
                <div className='p-7'>
                <h1 className='font-bold text-3xl text-[#c5a880]  '>About Us</h1>
                <p className='mt-2 '>Yak and Yeti is a heritage hotel located in Durbar Marg, the thriving city center of Kathmandu Valley, in a prime location that is minutes walking distance from the former Royal Palace. Durbar marg is a commercial area with high-end shops and a variety of food options. Our 5 star deluxe luxury property is 6 KM away from the Tribhuvan International Airport, about 1 KM from the famous tourist hub of Nepal- Thamel.</p>
                    <button className=' hover:bg-[#343a40] duration-500 text-white font-medium px-4 py-2 rounded bg-[#c5a880] cursor-pointer mt-5'>Book Now</button>

                </div>
                
                
            </div>
          

        

        </div>
        
      
    </div>
  
    </>
  )
}

export default Aboutus
