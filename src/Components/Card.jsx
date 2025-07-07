import React from 'react'
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Card2 =({title, image, price}) =>{
    
    return(
        <>
        <div className='w-[17rem] h-[22rem] bg-[#ffffff] rounded-2xl  flex justify-center mx-auto shadow'>
            <div className='flex flex-col justify-center items-center'>
                <img
                src={image}
                alt={title}
                className="w-60 mt-5 rounded-2xl h-35 object-cover cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
                />
                <div className='font-medium text-center mt-4'>{title}</div>
                <p className='text-[15px] text-[#c5a880] font-bold  text-center '>{price} .PER NIGHT</p>
                <button className='bg-[#343a40] text-white font-medium px-4 rounded hover:bg-[#c5a880] cursor-pointer mt-2'>Book Now</button>

            </div>

        </div>
       
      

        </>

       
    )
    

   



    

}

function Card() {
  return (
  
        
    <div  className='max-w-100%  h-[40rem] mt-[19rem] md:mt-[8rem]'>
        <div className='w-[95%] h-[40rem] mx-auto'>
            <div className='m-5  text-center'>
            <h1 className=' font-bold text-3xl uppercase'>Our Rooms</h1>
            <p className='mt-3'>Best Rooms For your Comfort Stay</p>

            </div>
            <div className=" hidden md:flex justify-end gap-2 mb-4 px-4">
          <button className="custom-prev bg-[#343a40] text-white px-4 py-1 rounded-md hover:bg-[#c5a880] ">
            Prev
          </button>
          <button className="custom-next bg-[#343a40] text-white px-4 py-1 rounded-md hover:bg-[#c5a880]">
            Next
          </button>
        </div>

            <div className='md:flex  justify-center items-center '>
                
                <Swiper
            modules={[Navigation]}
            navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
            }}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            >

                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic1}
                    price='$220'/>
                </SwiperSlide>
                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic2}
                    price='$220'/>
                </SwiperSlide>
                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic3}
                    price='$220'/>
                </SwiperSlide>
                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic3}
                    price='$220'/>
                </SwiperSlide>
                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic3}
                    price='$220'/>
                </SwiperSlide>
                <SwiperSlide>
                <Card2
                    title = 'LUXURY ROOM'
                    image={Pic3}
                    price='$220'/>
                </SwiperSlide>
                </Swiper>
        
            </div>
            
        </div>
      
    </div>
    
  )
}

export default Card
