import React, { ChangeEvent, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import useTopics from '@apis/topic/useTopics';
import BTopicCard from '@components/B/BTopicCard';
import { Row, Col } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import ToggleSwitch from '@components/commons/ToggleSwitch/ToggleSwitch';

import { colors } from '@styles/theme';

import { BFillLogoIcon, UpDownChevronIcon } from '@icons/index';

import { Container } from './BTopics.styles';

const BTopics = () => {
  const [topicFilter, setTopicFilter] = useState('진행중');
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [isLatest, setIsLatest] = useState(true);
  const { data } = useTopics({
    side: 'TOPIC_B',
    sort: 'createdAt,DESC',
    status: topicFilter === '진행중' ? 'VOTING' : 'CLOSED',
  });

  const topics = data?.pages.flatMap((page) => page.data);

  const handleTopicStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTopicFilter(e.target.value);
  };

  /**
   * set body background color to dark and restore it on cleanup
   */
  useLayoutEffect(() => {
    const prevColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#0e0d16';

    return () => {
      document.body.style.backgroundColor = prevColor;
    };
  }, []);

  return (
    <Layout
      ThemeColor="#0e0d16"
      hasBottomNavigation
      HeaderLeft={<BFillLogoIcon width={30} height={30} fill={colors.white} />}
      HeaderCenter={
        <ToggleSwitch value={topicFilter} onChange={handleTopicStatusChange}>
          <ToggleSwitch.Option value={'진행중'}>
            <Text size={15} weight={500} color={'inherit'}>
              진행중
            </Text>
          </ToggleSwitch.Option>
          <ToggleSwitch.Option value={'종료된'}>
            <Text size={15} weight={500} color={'inherit'}>
              종료된
            </Text>
          </ToggleSwitch.Option>
        </ToggleSwitch>
      }
    >
      <Container>
        <Row justifyContent={'flex-end'} gap={12} padding="15px 20px">
          <button onClick={() => setIsMineOnly((prev) => !prev)}>
            <Row alignItems="center" gap={6}>
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: isMineOnly ? colors.white : colors.white_40,
                }}
              />
              <Text size={13} color={isMineOnly ? colors.white : colors.white_40}>
                내 토픽만
              </Text>
            </Row>
          </button>
          <button onClick={() => setIsLatest((prev) => !prev)}>
            <Row alignItems="center" gap={6}>
              <UpDownChevronIcon stroke={isLatest ? colors.white : colors.white_40} />
              <Text size={13} color={isLatest ? colors.white : colors.white_40}>
                최신순
              </Text>
            </Row>
          </button>
        </Row>
        <Col padding={'0 20px 100px'} gap={30}>
          {topics?.map((topic) => <BTopicCard key={topic.topicId} topic={topic} />)}
        </Col>
      </Container>
    </Layout>
  );
};

export default BTopics;
