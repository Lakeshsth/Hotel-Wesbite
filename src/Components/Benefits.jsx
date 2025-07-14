import React from 'react'
import { CiWifiOn, CiAlarmOn, CiSquareChevDown, CiTrophy, CiApple, CiBank } from "react-icons/ci";


const Benefitsicons = ({icons , desc}) =>{
    return (
       <>
       <div className='flex flex-col justify-center items-center gap-4'>
       <div className='text-3xl'> {icons} </div>
       <p>{desc}</p>
        
       </div>
           
        </>


    )
   
            

}

function Benefits() {
  return (
    <div>
        <div className='w-full bg-[#00000009] md:h-[24rem] py-5 text-center mx-auto '>
            <div className='py-5'>
            <h1 className='font-bold text-2xl py-5'>YOUR BENEFITS </h1>
            <p className='uppercase font-light text-[15px]'>Enjoy Leaders Club Sterling Benefits with Every Stay</p>
            </div>
            <div className='grid grid-cols-2 md:flex  justify-center items-center mx-auto gap-16  mt-6 max-w-[50%] '>
                <Benefitsicons 
                icons =  <CiWifiOn/>
                desc = 'Wifi Acces'  />
                <Benefitsicons 
                icons =  <CiAlarmOn/>
                desc = 'Wifi Acces'  />
                <Benefitsicons 
                icons =  <CiTrophy/>
                desc = 'Wifi Acces'  />
                <Benefitsicons 
                icons =  <CiApple/>
                desc = 'Wifi Acces'  />
                <Benefitsicons 
                icons =  <CiBank/>
                desc = 'Wifi Acces'  />
                <Benefitsicons 
                icons =  <CiBank/>
                desc = 'Wifi Acces'  />
                
            </div>
            <div className='mt-9 text-center'>
                <h1 className='font-bold'>Need Help?</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-9 mt-4'>
                    <a
                    className='flex items-center gap-2 uppercase text-[14px] font-medium text-[#c5a880]'
                    href=""
                    >
                    Contact Our Specialists <CiSquareChevDown className='text-2xl' />
                    </a>
                    <a
                    className='flex items-center gap-2 uppercase text-[14px] font-medium text-[#c5a880]'
                    href=""
                    >
                    View Benefits Details <CiSquareChevDown className='text-2xl' />
                    </a>
                 </div>
            </div>
           
            
        

        </div>
        
      
    </div>
  )
}

export default Benefits
