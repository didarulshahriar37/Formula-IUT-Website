import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
import slider1 from '../../../assets/SLider1.jpg';
import slider2 from '../../../assets/Slider2.jpg';
import slider3 from '../../../assets/Slider3.jpg';

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="Slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Slider 3" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-fade"></div>
    </div>
  );
}
