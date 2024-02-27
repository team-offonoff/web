import React from 'react';
import { useNavigate } from 'react-router-dom';

import CommentChip from '@components/commons/Chip/CommentChip';
import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { MeatballIcon } from '@icons/index';

import { getDateDiff } from '@utils/date';

import { CardContainer, CardFooter } from './BTopicCard.styles';
import BTopicChoice from './BTopicChoice';

interface BTopicCardProps {
  topic: TopicResponse;
}

const BTopicCard = ({ topic }: BTopicCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/topics/b/${topic.topicId}`, { state: { topic } });
  };

  const handleOptionClick = () => {};

  return (
    <>
      <CardContainer onClick={handleCardClick}>
        <Col padding={'12px 22px 20px'}>
          <Row justifyContent={'space-between'} alignItems={'center'} style={{ marginBottom: 2 }}>
            <Row gap={10}>
              <Text size={13} color={colors.purple}>
                {topic.keyword?.keywordName}
              </Text>
              <Text size={13} color={colors.white_40}>
                {getDateDiff(topic.createdAt)} 전
              </Text>
            </Row>
            {topic.selectedOption && (
              <Text
                size={13}
                weight={600}
                color={colors.purple}
                noWrap
                style={{
                  borderRadius: 30,
                  padding: '2px 12px',
                  backgroundColor: colors.purple_30,
                }}
              >
                선택완료
              </Text>
            )}
          </Row>
          <Row justifyContent={'space-between'} alignItems={'center'} style={{ marginBottom: 17 }}>
            <Text size={18} weight={600} color={colors.white}>
              {topic.topicTitle}
            </Text>
            {/* TBD: 1차 스펙 아웃 */}
            {/* <button onClick={handleOptionClick}>
              <MeatballIcon fill={colors.white_60} />
            </button> */}
          </Row>
          <Row gap={5}>
            {topic.choices.map((choice) => {
              return (
                <BTopicChoice
                  key={choice.choiceId}
                  side={choice.choiceOption}
                  content={choice.content.text || ''}
                />
              );
            })}
          </Row>
        </Col>
        <CardFooter>
          <Row gap={5}>
            <Text size={13} weight={600} color={colors.white_80}>
              선택
            </Text>
            <Text size={13} weight={600} color={colors.white_40}>
              {topic.voteCount.toLocaleString()} 명
            </Text>
          </Row>
          <CommentChip
            count={topic.commentCount}
            backgroundColor={colors.black_20}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default BTopicCard;
