import React from 'react';

import AlphaTopicCard from '@components/AlphaTopic/AlphaTopicCard';
import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ALogoIcon } from '@icons/index';

import { Container } from './AlphaTopics.styles';

const AlphaTopics = () => {
  return (
    <Layout
      hasBottomNavigation
      HeaderLeft={() => <ALogoIcon width={30} height={30} fill={colors.white} />}
      HeaderCenter={() => <Text>진행중</Text>}
    >
      <Container>
        <Row justifyContent={'flex-end'} gap={12} padding="15px 20px">
          <button>내 토픽만</button>
          <button>최신순</button>
        </Row>
        <Col>
          <AlphaTopicCard
            chip="popular"
            topicId={241}
            topicSide={'A'}
            topicTitle={'topicTitle'}
            deadline={0}
            voteCount={42}
            topicContent={''}
            keyword={{
              keywordId: 12,
              keywordName: 'keywordName',
              topicSide: 'topicSide',
            }}
            choices={[]}
            author={{
              id: 123,
              nickname: 'nickname',
              profileImageUrl: null,
            }}
            selectedOption={null}
          />
        </Col>
      </Container>
    </Layout>
  );
};

export default AlphaTopics;
