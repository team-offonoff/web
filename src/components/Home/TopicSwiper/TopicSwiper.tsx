import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { colors } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

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
      <PrevButton
        disabled={init || prevDisabled}
        onClick={() => {
          swiperRef.current?.slidePrev();
          setNextDisabled(false);
        }}
      >
        <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white_40} />
      </PrevButton>
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
        <RightChevronIcon stroke={colors.white_40} />
      </NextButton>
    </React.Fragment>
  );
};

const SlideButton = styled.button<{ disabled: boolean }>`
  z-index: 100;
  width: 32px;
  height: 32px;
  padding: 4.8px 10.4px;
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
