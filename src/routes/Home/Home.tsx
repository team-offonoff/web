import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NotificationButton from '@components/commons/Header/NotificationButton/NotificationButton';
import Layout from '@components/commons/Layout/Layout';
import TopicCard from '@components/Home/TopicCard/TopicCard';
import TopicSwiper from '@components/Home/TopicSwiper/TopicSwiper';

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
