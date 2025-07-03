import React from "react";

import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';

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
        <h1 className="text-4xl font-bold mb-6 lg:text-7xl md:text-5xl sm:text-4xl">
          Spend Your Best Holiday <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            at Our Hotel
          </span>
        </h1>

        <p className="max-w-[700px] text-lg">
          Voyage Hotel & Spa offers stylish and modern accommodations with
          luxurious amenities in every room so that you could enjoy your stay.
        </p>

        <button className="uppercase px-7 bg-amber-500  text-xl md:text-xl font-bold mt-7 rounded-2xl">
          Book An Appointment
        </button>
      </div>

    
      <style>
        {`
          /* Default swiper navigation buttons */
          .swiper-button-next,
          .swiper-button-prev {
            z-index: 10 !important;
          }
        `}
      </style>
    </div>
  );
}

export default Body;
