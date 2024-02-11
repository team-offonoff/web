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

interface AlphaTopicCardProps extends TopicResponse {
  chip?: 'popular' | 'close';
}

const AlphaTopicCard = React.memo((props: AlphaTopicCardProps) => {
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const voteMutation = useVoteTopic({ side: 'TOPIC_A', sort: 'createdAt,DESC' });
  const [A, B] = props.choices;

  const handleCommentChipClick = () => {
    toggleSheet();
  };

  const handleVote = (side: 'CHOICE_A' | 'CHOICE_B') => {
    if (props.selectedOption === null) {
      voteMutation.mutate({
        topicId: props.topicId,
        choiceOption: side,
        votedAt: new Date().getTime() / 1000,
      });
    }
  };

  return (
    <>
      <Col padding={'20px'}>
        {props.chip && (
          <Row style={{ marginBottom: 12 }}>
            <Chip tintColor={'#D3FF9C'} label={'실시간 인기 토픽'} />
          </Row>
        )}
        <Row justifyContent={'space-between'} style={{ marginBottom: 14 }}>
          <Text size={18} weight={500} color={colors.white}>
            {props.topicTitle}
          </Text>
          <button> - </button>
        </Row>
        <Col gap={5} style={{ marginBottom: 14 }}>
          <ProgressBar
            revealed={props.selectedOption !== null}
            highlighted={props.selectedOption === 'CHOICE_A'}
            title={A.content.text || ''}
            percentage={(A.voteCount / props.voteCount) * 100}
            onClick={() => handleVote('CHOICE_A')}
            left={() => (
              <Text
                color={props.selectedOption === 'CHOICE_A' ? colors.A_80 : colors.A_40}
                size={24}
                weight={900}
              >
                A
              </Text>
            )}
          />
          <ProgressBar
            revealed={props.selectedOption !== null}
            highlighted={props.selectedOption === 'CHOICE_B'}
            title={B.content.text || ''}
            percentage={(B.voteCount / props.voteCount) * 100}
            onClick={() => handleVote('CHOICE_B')}
            left={() => (
              <Text
                color={props.selectedOption === 'CHOICE_B' ? colors.B_80 : colors.B_40}
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
            {getDateDiff(props.createdAt)} 전
          </Text>
          <CommentChip count={props.commentCount} onClick={handleCommentChipClick} />
        </Row>
      </Col>
      <CommentSheet>
        <TopicComments topic={props} />
      </CommentSheet>
    </>
  );
});

export default AlphaTopicCard;
