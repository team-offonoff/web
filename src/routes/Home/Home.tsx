import { useState } from 'react';

import BottomSheet from '@components/BottomSheet/BottomSheet';
import TopicCard from '@components/TopicCard/TopicCard';

import { Container, SheetContainer } from './Home.styles';

const Home = () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);

  return (
    <Container>
      <TopicCard />
      <BottomSheet open={isOpenBottomSheet} setIsOpen={setIsOpenBottomSheet}>
        <SheetContainer>바텀시트</SheetContainer>
      </BottomSheet>
    </Container>
  );
};

export default Home;
