import React from "react";

import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import { CiCalendarDate, CiCircleChevDown, CiSearch } from "react-icons/ci";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Body() {
  return (
    <div className="relative w-full h-[40rem]">
      {/* Swiper image slider as background */}
      <Swiper
        modules={[Navigation, Autoplay]}
  
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full h-full"
      >
        {[Pic1, Pic2, Pic3, Pic4].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[40rem] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="absolute inset-0 bg-black/60 z-20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center z-30">
        <h1 className="text-[2rem] font-bold mb-4 lg:text-7xl md:text-5xl sm:text-4xl">
          Spend Your Best Holiday <br />
          <span className="text-3xl md:text-[3rem]">
            at Our Hotel
          </span>
        </h1>

        <p className="max-w-[700px] text-">
          Voyage Hotel & Spa offers stylish and modern accommodations with
          luxurious amenities in every room so that you could enjoy your stay.
        </p>
        <div className="flex gap-8">
        <button className="uppercase px-7  py-2 bg-[#c5a880]  md:text-sm font-medium mt-7 cursor-pointer">
          Take A Tour
        </button>
        <button className="uppercase px-7 py-2 border border-white md:text-sm font-medium mt-7 cursor-pointer">
          Learn More
        </button>

        </div>

       
      </div>

      <div className="absolute bottom-[-10%] md:bottom-[-1%] md:h-[20%] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] h-[65%] bg-[#343a40] flex justify-center items-center z-40 shadow-2xl">
      <ul className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-[40%]">
        <div className="text-center ">
        <li className="text-white font-bold">Check-In</li>
        <input className="text-white text-center"   type="Check-in Date" placeholder="Check-in Date" /> 
        </div>
        <div>
        <li className="text-white font-bold text-center">Check-Out</li>
        <input className="text-white text-center" type="Check-in Date" placeholder="Check-Out Date" />
        </div>
        <div>
        <li className="text-white font-bold text-center">Rooms</li>
        <input className="text-white text-center" type="Check-in Date" placeholder="Suite" />
        </div>
        <div>
        <li className="text-white font-bold text-center">Guest</li>
        <input className="text-white text-center" type="Check-in Date" placeholder="1 Person" />
        </div>
        <button className="bg-[#c5a880] uppercase px-6 py-1 font-bold text-white cursor-pointer"> Check Availability </button>
        
      </ul>

      </div>
  
    </div>
  );
}

export default Body;
