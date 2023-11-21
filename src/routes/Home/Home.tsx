import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import BottomSheet from '@components/BottomSheet/BottomSheet';
import TopicCard from '@components/TopicCard/TopicCard';

import { Container, SheetContainer } from './Home.styles';

const Home = () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <TopicCard />
        </SwiperSlide>
        <SwiperSlide>
          <TopicCard />
        </SwiperSlide>
        <SwiperSlide>
          <TopicCard />
        </SwiperSlide>
        <SwiperSlide>
          <TopicCard />
        </SwiperSlide>
      </Swiper>
      <BottomSheet open={isOpenBottomSheet} setIsOpen={setIsOpenBottomSheet}>
        <SheetContainer>바텀시트</SheetContainer>
      </BottomSheet>
    </Container>
  );
};

export default Home;
