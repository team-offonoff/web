import { useCallback, useState } from 'react';

import useTopics, { TopicsRequestDTO, useTrendingTopics } from '@apis/topic/useTopics';
import useVoteTopic from '@apis/topic/useVoteTopic';
import ATopicCard from '@components/A/ATopicCard';
import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import { Toast } from '@components/commons/Toast/Toast';

import { useAuthStore } from '@store/auth';

import { colors } from '@styles/theme';

import { ALogoIcon, UpDownChevronIcon } from '@icons/index';

import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

import { ResponseError } from '@apis/fetch';

import { Container } from './ATopics.styles';

const ATopics = () => {
  const memberId = useAuthStore((state) => state.memberId);
  const [isMineOnly, setIsMineOnly] = useState(false);
  const [isLatest, setIsLatest] = useState(true);

  const requestParams: TopicsRequestDTO = {
    side: 'TOPIC_A',
    sort: isLatest ? 'createdAt,DESC' : 'voteCount,DESC',
  };

  const { data: trendingTopicPages } = useTrendingTopics();
  const { data: topicPages, hasNextPage, fetchNextPage } = useTopics(requestParams);
  const voteMutation = useVoteTopic(requestParams);

  const [setTargetRef] = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: false,
    onIntersect: useCallback(
      ([{ isIntersecting }]) => {
        if (isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      [fetchNextPage, hasNextPage]
    ),
  });

  const topics = isMineOnly
    ? topicPages?.pages.flatMap((page) => page.data).filter((topic) => topic.author.id === memberId)
    : topicPages?.pages.flatMap((page) => page.data);
  const trendingTopics = trendingTopicPages?.pages.flatMap((page) => page.data);

  const handleVote = async (topicId: number, side: 'CHOICE_A' | 'CHOICE_B') => {
    try {
      await voteMutation.mutateAsync({
        topicId: topicId,
        choiceOption: side,
        votedAt: new Date().getTime() / 1000,
      });
    } catch (error) {
      if (error instanceof ResponseError && error.errorData.abCode === 'VOTED_BY_AUTHOR') {
        Toast.error('토픽을 작성한 사람은 투표할 수 없어요');
      }
    }
  };

  return (
    <Layout
      hasBottomNavigation
      HeaderLeft={<ALogoIcon width={30} height={30} fill={colors.white} />}
    >
      <Container>
        <div
          style={{
            position: 'absolute',
            top: 112,
            right: -42,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <ALogoIcon width={352} height={400} fill={colors.navy2_20} />
        </div>
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
              <UpDownChevronIcon stroke={colors.white} />
              <Text size={13} color={colors.white}>
                {isLatest ? '최신순' : '인기순'}
              </Text>
            </Row>
          </button>
        </Row>
        <Col style={{ backgroundColor: 'inherit', paddingBottom: 100 }}>
          {topics?.map((topic) => {
            const isTrending = trendingTopics?.some(
              (trendingTopic) => trendingTopic.topicId === topic.topicId
            );
            return (
              <ATopicCard
                key={topic.topicId}
                topic={topic}
                onVote={handleVote}
                isTrending={isTrending}
                isMine={topic.author.id === memberId}
              />
            );
          })}
          <div ref={setTargetRef} />
        </Col>
      </Container>
    </Layout>
  );
};

export default ATopics;
