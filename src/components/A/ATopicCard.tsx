import React from 'react';

import Chip from '@components/commons/Chip/Chip';
import CommentChip from '@components/commons/Chip/CommentChip';
import { Col, Row } from '@components/commons/Flex/Flex';
import ProgressBar from '@components/commons/ProgressBar/ProgressBar';
import Text from '@components/commons/Text/Text';
import TopicComments from '@components/Home/TopicComments/TopicComments';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { HotIcon, MeatballIcon, TrendingIcon } from '@icons/index';

import { getDateDiff } from '@utils/date';

import { Container } from './ATopicCard.styles';

interface AlphaTopicCardProps {
  topic: TopicResponse;
  onVote: (topicId: number, side: 'CHOICE_A' | 'CHOICE_B') => void;
  isTrending?: boolean;
  isMine: boolean;
}

const AlphaTopicCard = React.memo(({ topic, onVote, isTrending, isMine }: AlphaTopicCardProps) => {
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});

  const isRevealed = topic.selectedOption !== null || isMine;

  const [A, B] = topic.choices;
  const roundedPercentageA = Math.round((A.voteCount / topic.voteCount) * 100);
  const roundedPercentageB = 100 - roundedPercentageA;

  const isHot = 45 < roundedPercentageA && roundedPercentageA < 55;
  const hasChip = isTrending || isHot;

  const handleCommentChipClick = () => {
    toggleSheet();
  };

  const handleVote = (side: 'CHOICE_A' | 'CHOICE_B') => {
    onVote(topic.topicId, side);
  };

  const handleOptionClick = () => {};

  const TrendingChip = () => (
    <Chip icon={<TrendingIcon />} tintColor={'#8CFF8A'} label={'실시간 인기 토픽'} />
  );
  const HotChip = () => <Chip icon={<HotIcon />} tintColor={'#FF61B7'} label={'치열한 경쟁 중'} />;
  const TopicCardChip = () => (isTrending ? <TrendingChip /> : isHot ? <HotChip /> : null);

  return (
    <>
      <Container>
        {hasChip && (
          <Row style={{ marginBottom: 12 }}>
            <TopicCardChip />
          </Row>
        )}
        <Row justifyContent={'space-between'} style={{ marginBottom: 14 }} gap={77}>
          <Text size={18} weight={500} color={colors.white}>
            {topic.topicTitle}
          </Text>
          <button onClick={handleOptionClick}>
            <MeatballIcon fill={colors.white_60} />
          </button>
        </Row>
        <Col gap={5} style={{ marginBottom: 14 }}>
          <ProgressBar
            revealed={isRevealed}
            highlighted={topic.selectedOption === 'CHOICE_A' || isMine}
            title={A.content.text || ''}
            percentage={roundedPercentageA}
            onClick={() => handleVote('CHOICE_A')}
            left={() => (
              <Text
                color={topic.selectedOption === 'CHOICE_A' || isMine ? colors.A_80 : colors.A_40}
                size={24}
                weight={900}
              >
                A
              </Text>
            )}
          />
          <ProgressBar
            revealed={isRevealed}
            highlighted={topic.selectedOption === 'CHOICE_B' || isMine}
            title={B.content.text || ''}
            percentage={roundedPercentageB}
            onClick={() => handleVote('CHOICE_B')}
            left={() => (
              <Text
                color={topic.selectedOption === 'CHOICE_B' || isMine ? colors.B_80 : colors.B_40}
                size={24}
                weight={900}
              >
                B
              </Text>
            )}
          />
        </Col>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Row gap={8}>
            <Text size={13} color={colors.white_40}>
              {getDateDiff(topic.createdAt)} 전
            </Text>
            <Text size={13} color={colors[2].neutral_80}>
              {topic.voteCount}명 참여
            </Text>
          </Row>
          <CommentChip count={topic.commentCount} onClick={handleCommentChipClick} />
        </Row>
      </Container>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
    </>
  );
});

export default AlphaTopicCard;
