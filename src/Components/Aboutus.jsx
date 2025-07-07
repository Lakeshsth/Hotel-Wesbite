import React from 'react'
import Pic2 from '../assets/pic2.jpg';

function Aboutus() {
  return (
    <>
    <div className='w-full  mt-[6rem] flex justify-center items-center px-15 '>
        <div className='md:flex justify-center gap-10 items-center '>
            <img className='w-[100%] md:w-[40%] mx-auto rounded-2xl shadow-xl' src={Pic2} alt="" />
            <div className='text-center md:text-start bg-[#3d414409] rounded shadow mt-5'>
                <div className='p-7'>
                <h1 className='font-bold text-3xl text-[#c5a880]  '>About Us</h1>
                <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum minima molestiae, magni dolores ratione numquam,
                    nam necessitatibus hic laborum nesciunt! Asperiores obcaecati at, sequi animi provident quasi voluptas quae!
                    nam necessitatibus hic laborum nesciunt! Asperiores obcaecati at, sequi animi provident quasi voluptas quae!
                    nam necessitatibus hic laborum nesciunt! Asperiores obcaecati at, sequi animi provident quasi voluptas quae!
                    nam necessitatibus hic laborum nesciunt! Asperiores obcaecati at, sequi animi provident quasi voluptas quae!</p>
                    <button className='  text-white font-medium px-4 py-2 rounded bg-[#c5a880] cursor-pointer mt-5'>Book Now</button>

                </div>
                
                
            </div>
          

        

        </div>
        
      
    </div>
    <div className='h-200'>

    </div>
    </>
  )
}

export default Aboutus
