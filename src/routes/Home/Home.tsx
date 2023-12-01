import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import TopicCard from '@components/TopicCard/TopicCard';

import { Container } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Swiper spaceBetween={0} slidesPerView={1} style={{ height: '100%' }}>
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
    </Container>
  );
};

export default Home;
