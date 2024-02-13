import React, { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import TopicSlide from './TopicSlide';

SwiperCore.use([Navigation]);

interface TopicSwiperProps {
  children: JSX.Element[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const TopicSwiper = ({ children, fetchNextPage, hasNextPage }: TopicSwiperProps) => {
  const swiperRef = useRef<SwiperCore>();
  const [init, setInit] = useState(true);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleReachBeginning = () => {
    setPrevDisabled(true);
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setInit(false);

    if (swiper.slides.length - swiper.realIndex === 2) {
      fetchNextPage();
    }

    if (!hasNextPage && children.length - swiper.realIndex === 1) {
      setNextDisabled(true);
    }
  };

  return (
    <React.Fragment>
      <Swiper
        allowTouchMove={false}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        style={{ height: '100%' }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        onReachBeginning={handleReachBeginning}
        observer={true}
      >
        {children.map((child) => {
          return (
            <TopicSlide
              key={child.key}
              init={init}
              prevDisabled={prevDisabled}
              swiperRef={swiperRef}
              setNextDisabled={setNextDisabled}
              nextDisabled={nextDisabled}
              setPrevDisabled={setPrevDisabled}
            >
              {child}
            </TopicSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default TopicSwiper;
