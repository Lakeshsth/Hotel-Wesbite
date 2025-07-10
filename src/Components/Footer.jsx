import React from 'react'
import Lak from '../assets/Logolak.png'
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className='w-full bg-[#00000009] h-full py-5 text-center mt-20'>
        <div className='flex flex-col md:flex-row mt-20 justify-center items-center gap-6 text-center'>
            <div className='h-[15rem]  w-[20rem] flex flex-col items-center pt-5 '>
                <img src={Lak} className='h-15' alt="" />
                <p className='text-[15px] w-[80%] pt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className='flex justify-center items-center mt-5 gap-4 text-2xl'>
                    <CiTwitter className='bg-[#c5a880] rounded' />
                    <CiFacebook className='bg-[#c5a880] rounded' />
                    <CiInstagram className='bg-[#c5a880] rounded' />
                </div>

            </div>
            <div className='h-[15rem]  w-[20rem]'>
                <h1 className='font-bold text-2xl pt-5'>Services</h1>
                <div className=' flex flex-col gap-1 mt-5'>
                <p>Free Wifi</p>
                <p>Easy Booking</p>
                <p>Restaurant</p>
                <p>Swimming Pool</p>
                <p>Cold Aircondition</p>
                <p>Beauty & Health</p>
                <p>Help & Support</p>

                </div>
               

            </div>
            <div className='h-[15rem]  w-[20rem]'>
            <h1 className='font-bold text-2xl pt-5'>Quick Links</h1>
                <div className=' flex flex-col gap-1 mt-5'>
                <p>Home</p>
                <p>About</p>
                <p>Rooms</p>
                <p>Resto & Bar</p>
                </div>
                

            </div>
            <div className='h-[15rem]  w-[20rem]'>
            <h1 className='font-bold text-2xl pt-5 '>Have a Questions?</h1>
                <div className=' flex flex-col gap-1 mt-5'>
                <p>Madhyapur Thimi - 5 Bhaktapur</p>
                <p> 9808979817 </p>
                <p>	Lakeshshrestha88@gmail.com</p>
                </div>
                
            </div>
           
        </div>
        <div className='w-full h-[5rem] bg-amber-800 flex justify-center items-center mt-[8rem]'>
                <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
            </div>
      
    </div>
  )
}

export default Footer
