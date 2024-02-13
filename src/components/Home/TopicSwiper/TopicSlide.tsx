import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { colors } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

interface TopicSlideProps {
  init: boolean;
  swiperRef: any;
  prevDisabled: any;
  nextDisabled: any;
  setNextDisabled: any;
  setPrevDisabled: any;
}

const TopicSlide = (props: PropsWithChildren<TopicSlideProps>) => {
  const {
    init,
    prevDisabled,
    swiperRef,
    setNextDisabled,
    nextDisabled,
    setPrevDisabled,
    children,
  } = props;
  return (
    <StyledSlide>
      <PrevButton
        disabled={init || prevDisabled}
        onClick={() => {
          swiperRef.current?.slidePrev();
          setNextDisabled(false);
        }}
      >
        <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white_40} />
      </PrevButton>
      {children}
      <NextButton
        disabled={nextDisabled}
        onClick={() => {
          swiperRef.current?.slideNext();
          setPrevDisabled(false);
        }}
      >
        <RightChevronIcon stroke={colors.white_40} />
      </NextButton>
    </StyledSlide>
  );
};

TopicSlide.displayName = 'SwiperSlide';

const StyledSlide = styled(SwiperSlide)`
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

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

export default TopicSlide;
