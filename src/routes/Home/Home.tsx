import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import useTopics from '@apis/topic/useTopics';
import NotificationButton from '@components/commons/Header/NotificationButton/NotificationButton';
import Layout from '@components/commons/Layout/Layout';
import TopicSwiper from '@components/Home/TopicSwiper/TopicSwiper';

import { Container } from './Home.styles';

const Home = () => {
  const { data, fetchNextPage, hasNextPage } = useTopics({
    status: 'VOTING',
    size: 10,
  });

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
          <TopicSwiper
            topics={topics}
            fetchNextPage={handleFetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Home;
