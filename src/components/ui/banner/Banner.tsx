"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../banner/Banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://thegadgetflow.com/wp-content/uploads/2020/04/10-gadgets-for-a-futuristic-home-office-1200x675.jpg"
            alt="slide-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://resources.owllabs.com/hubfs/uneebo-office-design-yNtCxu4kJXk-unsplash.jpg"
            alt="slide-2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
