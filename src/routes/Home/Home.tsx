import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NotificationButton from '@components/Header/NotificationButton/NotificationButton';
import Layout from '@components/Layout/Layout';
import TopicCard from '@components/TopicCard/TopicCard';

import { Container } from './Home.styles';

const Home = () => {
  return (
    <Layout HeaderRight={() => <NotificationButton />}>
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
    </Layout>
  );
};

export default Home;
