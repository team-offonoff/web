import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RightChevronIcon } from '@icons/index';

SwiperCore.use([Navigation]);

interface TopicSwiperProps {
  children: React.ReactNode[];
}

const TopicSwiper = ({ children }: TopicSwiperProps) => {
  const swiperRef = useRef<SwiperCore>();
  const [init, setInit] = useState(true);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  return (
    <React.Fragment>
      <PrevButton
        disabled={init || prevDisabled}
        onClick={() => {
          swiperRef.current?.slidePrev();
          setNextDisabled(false);
        }}
      >
        <RightChevronIcon style={{ transform: 'rotate(180deg)' }} />
      </PrevButton>
      <Swiper
        allowTouchMove={false}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        style={{ height: '100%' }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => setInit(false)}
        onReachBeginning={() => setPrevDisabled(true)}
        onReachEnd={() => setNextDisabled(true)}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <NextButton
        disabled={nextDisabled}
        onClick={() => {
          swiperRef.current?.slideNext();
          setPrevDisabled(false);
        }}
      >
        <RightChevronIcon />
      </NextButton>
    </React.Fragment>
  );
};

const SlideButton = styled.button<{ disabled: boolean }>`
  z-index: 100;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;

  ${(props) => props.disabled && `display: none;`}
`;

const PrevButton = styled(SlideButton)`
  position: absolute;
  top: 110px;
  left: 20px;
`;

const NextButton = styled(SlideButton)`
  position: absolute;
  top: 110px;
  right: 20px;
`;

export default TopicSwiper;
