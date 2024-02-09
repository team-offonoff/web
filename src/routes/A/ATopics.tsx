import { ChangeEvent, useState } from 'react';

import useTopics from '@apis/topic/useTopics';
import ATopicCard from '@components/A/ATopicCard';
import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import ToggleSwitch from '@components/commons/ToggleSwitch/ToggleSwitch';

import { colors } from '@styles/theme';

import { ALogoIcon, UpDownChevronIcon } from '@icons/index';

import { Container } from './ATopics.styles';

const AlphaTopics = () => {
  const { data } = useTopics({ side: 'TOPIC_A' });
  const [topicFilter, setTopicFilter] = useState('진행중');
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [isLatest, setIsLatest] = useState(true);

  const topics = data?.pages.flatMap((page) => page.data);

  const handleTopicStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTopicFilter(e.target.value);
  };

  return (
    <Layout
      hasBottomNavigation
      HeaderLeft={<ALogoIcon width={30} height={30} fill={colors.white} />}
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
        <Col style={{ backgroundColor: 'inherit', paddingBottom: 100 }}>
          {topics?.map((topic) => {
            return (
              <ATopicCard
                key={topic.topicId}
                // chip="popular"
                topicId={topic.topicId}
                topicSide={'TOPIC_A'}
                topicTitle={topic.topicTitle}
                deadline={topic.deadline}
                voteCount={topic.voteCount}
                topicContent={topic.topicContent}
                keyword={topic.keyword}
                choices={topic.choices}
                author={topic.author}
                selectedOption={topic.selectedOption}
                commentCount={topic.commentCount}
                createdAt={topic.createdAt}
              />
            );
          })}
        </Col>
      </Container>
    </Layout>
  );
};

export default AlphaTopics;
