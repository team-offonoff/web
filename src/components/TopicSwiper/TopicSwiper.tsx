import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface TopicSwiperProps {
  children: React.ReactNode[];
}

const TopicSwiper = ({ children }: TopicSwiperProps) => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} style={{ height: '100%' }} allowTouchMove={false}>
      {children.map((child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopicSwiper;
