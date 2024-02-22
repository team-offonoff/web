import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

import TopicCard from '../TopicCard/TopicCard';

SwiperCore.use([Navigation]);

interface TopicSwiperProps {
  topics: TopicResponse[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const TopicSwiper = ({ topics, fetchNextPage, hasNextPage }: TopicSwiperProps) => {
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

    if (!hasNextPage && topics.length - swiper.realIndex === 1) {
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
        style={{ height: '100%', overflowY: 'auto' }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        onReachBeginning={handleReachBeginning}
        observer={true}
        observeSlideChildren={true}
        observeParents={true}
      >
        {topics.map((topic) => {
          return (
            <SwiperSlide>
              <SlideContainer>
                <PrevButton
                  disabled={init || prevDisabled}
                  onClick={() => {
                    swiperRef.current?.slidePrev();
                    setNextDisabled(false);
                  }}
                >
                  <RightChevronIcon
                    style={{ transform: 'rotate(180deg)' }}
                    stroke={colors.white_40}
                  />
                </PrevButton>
                <TopicCard topic={topic} />
                <NextButton
                  disabled={nextDisabled}
                  onClick={() => {
                    swiperRef.current?.slideNext();
                    setPrevDisabled(false);
                  }}
                >
                  <RightChevronIcon stroke={colors.white_40} />
                </NextButton>
              </SlideContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default TopicSwiper;

const SlideButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 63px;
  z-index: 100;
  width: 32px;
  height: 32px;
  padding: 4.8px 10.4px;
  cursor: pointer;
  background-color: transparent;

  ${(props) => props.disabled && `display: none;`}
`;

const PrevButton = styled(SlideButton)`
  left: 20px;
`;

const NextButton = styled(SlideButton)`
  right: 20px;
`;

const SlideContainer = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
