import { ChangeEvent, useState } from 'react';

import AlphaTopicCard from '@components/AlphaTopic/AlphaTopicCard';
import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import ToggleSwitch from '@components/commons/ToggleSwitch/ToggleSwitch';

import { colors } from '@styles/theme';

import { ALogoIcon, UpDownChevronIcon } from '@icons/index';

import { Container } from './AlphaTopics.styles';

const AlphaTopics = () => {
  const [topicFilter, setTopicFilter] = useState('진행중');
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [isLatest, setIsLatest] = useState(true);

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
        <Col>
          <AlphaTopicCard
            chip="popular"
            topicId={241}
            topicSide={'TOPIC_A'}
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
