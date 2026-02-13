import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/SLider1.jpg';
import slider2 from '../../../assets/Slider2.jpg';
import slider3 from '../../../assets/Slider3.jpg';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
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
    </>
  );
}
