import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';

import useTopics from '@apis/topic/useTopics';
import NotificationButton from '@components/commons/Header/NotificationButton/NotificationButton';
import Layout from '@components/commons/Layout/Layout';
import TopicCard from '@components/Home/TopicCard/TopicCard';
import TopicSwiper from '@components/Home/TopicSwiper/TopicSwiper';

import { Container } from './Home.styles';

const Home = () => {
  const topics = useTopics();

  if (topics.isLoading) {
    return <></>;
  }

  return (
    <Layout HeaderRight={() => <NotificationButton />}>
      <Container>
        <TopicSwiper>
          {
            topics.data?.data.map((topic) => {
              return <TopicCard />;
            }) as React.ReactNode[]
          }
        </TopicSwiper>
      </Container>
    </Layout>
  );
};

export default Home;
