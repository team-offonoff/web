import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';
import { SwiperSlide } from 'swiper/react';

import useTopics from '@apis/topic/useTopics';
import NotificationButton from '@components/commons/Header/NotificationButton/NotificationButton';
import Layout from '@components/commons/Layout/Layout';
import TopicCard from '@components/Home/TopicCard/TopicCard';
import TopicSwiper from '@components/Home/TopicSwiper/TopicSwiper';

import { Container } from './Home.styles';

const Home = () => {
  const { data, fetchNextPage, hasNextPage } = useTopics({ size: 10 });

  const topics = data?.pages.flatMap((page) => page.data);

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Layout HeaderRight={<NotificationButton />}>
      <Container>
        {topics && (
          <TopicSwiper fetchNextPage={handleFetchNextPage} hasNextPage={hasNextPage}>
            {topics.map((topic) => (
              <TopicCard topic={topic} key={topic.topicId} />
            ))}
          </TopicSwiper>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
