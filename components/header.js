import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img01.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="sm:text-7xl text-white text-3xl "> Cab Service all over Hyderabad</p>
                <p className="text-sm font-light text-white ">
                  24/7 cab service.
                </p>
                <Link href='https://wa.me/919704899400'>
                <button className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 ">
                  CONTACT US
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img02.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="sm:text-7xl text-white text-3xl"> Any Where . Any time</p>
                <p className="text-sm font-light text-white ">
                  Service available through out Hyderabad. 
                </p>
                <Link href='https://wa.me/919704899400'>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img03.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="sm:text-7xl text-white text-3xl "> First Class . Hyderabad</p>
                <p className="text-sm font-light text-white ">
                  Service for Any Purpose
                </p>
                <Link href='https://wa.me/919704899400'>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
