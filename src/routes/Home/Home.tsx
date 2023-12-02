import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NotificationButton from '@components/Header/NotificationButton/NotificationButton';
import Layout from '@components/Layout/Layout';
import TopicCard from '@components/TopicCard/TopicCard';
import TopicSwiper from '@components/TopicSwiper/TopicSwiper';

import { Container } from './Home.styles';

const Home = () => {
  return (
    <Layout HeaderRight={() => <NotificationButton />}>
      <Container>
        <TopicSwiper>
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </TopicSwiper>
      </Container>
    </Layout>
  );
};

export default Home;
