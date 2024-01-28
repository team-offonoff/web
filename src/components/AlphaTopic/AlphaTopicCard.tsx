import React from 'react';
import { styled } from 'styled-components';

import Chip from '@components/commons/Chip/Chip';
import CommentChip from '@components/commons/Chip/CommentChip';
import { Col, Row } from '@components/commons/Flex/Flex';
import ProgressBar from '@components/commons/ProgressBar/ProgressBar';
import Text from '@components/commons/Text/Text';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { ALogoIcon, CommentIcon } from '@icons/index';

interface AlphaTopicCardProps extends TopicResponse {
  chip?: 'popular' | 'close';
}

const AlphaTopicCard = (props: AlphaTopicCardProps) => {
  const { chip, topicTitle } = props;

  return (
    <Col padding={'20px'}>
      {chip && (
        <Row style={{ marginBottom: 12 }}>
          <Chip tintColor={'#D3FF9C'} label={'실시간 인기 토픽'} />
        </Row>
      )}
      <Row justifyContent={'space-between'} style={{ marginBottom: 14 }}>
        <Text size={18} weight={500} color={colors.white}>
          {topicTitle}
        </Text>
        <button> - </button>
      </Row>
      <Col gap={5} style={{ marginBottom: 14 }}>
        <ProgressBar
          revealed={true}
          highlighted={true}
          title={'A'}
          percentage={75}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          left={() => (
            <Text color={1 === 1 ? colors.A_80 : colors.A_40} size={24} weight={900}>
              A
            </Text>
          )}
        />
        <ProgressBar
          revealed={true}
          highlighted={false}
          title={'B'}
          percentage={25}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          left={() => (
            <Text color={1 === 1 ? colors.B_80 : colors.B_40} size={24} weight={900}>
              B
            </Text>
          )}
        />
      </Col>
      <Row justifyContent={'space-between'} alignItems={'center'}>
        <Text size={13} color={colors.white_40}>
          방금
        </Text>
        <CommentChip count={420} onClick={() => {}} />
      </Row>
    </Col>
  );
};

export default AlphaTopicCard;
