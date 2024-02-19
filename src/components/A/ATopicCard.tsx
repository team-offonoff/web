import React from 'react';

import useVoteTopic from '@apis/topic/useVoteTopic';
import Chip from '@components/commons/Chip/Chip';
import CommentChip from '@components/commons/Chip/CommentChip';
import { Col, Row } from '@components/commons/Flex/Flex';
import ProgressBar from '@components/commons/ProgressBar/ProgressBar';
import Text from '@components/commons/Text/Text';
import TopicComments from '@components/Home/TopicComments/TopicComments';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { getDateDiff } from '@utils/date';

interface AlphaTopicCardProps {
  topic: TopicResponse;
  onVote: (topicId: number, side: 'CHOICE_A' | 'CHOICE_B') => void;
  chip?: 'popular' | 'close';
  onVote: (topicId: number, side: 'CHOICE_A' | 'CHOICE_B') => void;
}

const AlphaTopicCard = React.memo(({ topic, onVote, chip }: AlphaTopicCardProps) => {
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const [A, B] = topic.choices;
  const roundedPercentageA = Math.round((A.voteCount / topic.voteCount) * 100);
  const roundedPercentageB = 100 - roundedPercentageA;

  const handleCommentChipClick = () => {
    toggleSheet();
  };

  const handleVote = (side: 'CHOICE_A' | 'CHOICE_B') => {
    onVote(topic.topicId, side);
  };

  return (
    <>
      <Col padding={'20px'}>
        {chip && (
          <Row style={{ marginBottom: 12 }}>
            <Chip tintColor={'#D3FF9C'} label={'실시간 인기 토픽'} />
          </Row>
        )}
        <Row justifyContent={'space-between'} style={{ marginBottom: 14 }}>
          <Text size={18} weight={500} color={colors.white}>
            {topic.topicTitle}
          </Text>
          <button> - </button>
        </Row>
        <Col gap={5} style={{ marginBottom: 14 }}>
          <ProgressBar
            revealed={topic.selectedOption !== null}
            highlighted={topic.selectedOption === 'CHOICE_A'}
            title={A.content.text || ''}
            percentage={roundedPercentageA}
            onClick={() => handleVote('CHOICE_A')}
            left={() => (
              <Text
                color={topic.selectedOption === 'CHOICE_A' ? colors.A_80 : colors.A_40}
                size={24}
                weight={900}
              >
                A
              </Text>
            )}
          />
          <ProgressBar
            revealed={topic.selectedOption !== null}
            highlighted={topic.selectedOption === 'CHOICE_B'}
            title={B.content.text || ''}
            percentage={roundedPercentageB}
            onClick={() => handleVote('CHOICE_B')}
            left={() => (
              <Text
                color={topic.selectedOption === 'CHOICE_B' ? colors.B_80 : colors.B_40}
                size={24}
                weight={900}
              >
                B
              </Text>
            )}
          />
        </Col>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Text size={13} color={colors.white_40}>
            {getDateDiff(topic.createdAt)} 전
          </Text>
          <CommentChip count={topic.commentCount} onClick={handleCommentChipClick} />
        </Row>
      </Col>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
    </>
  );
});

export default AlphaTopicCard;
