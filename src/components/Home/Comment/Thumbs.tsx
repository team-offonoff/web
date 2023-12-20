import React from 'react';

import { Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ThumbsIcon } from '@icons/index';

interface ThumbsProps {
  type: 'up' | 'down';
  count: number;
  hasClicked: boolean;
  onClick: () => void;
}

const Thumbs = ({ type, count, hasClicked, onClick }: ThumbsProps) => {
  const fill = hasClicked ? colors.purple : 'none';
  const stroke = hasClicked ? colors.purple : colors.black_40;

  return (
    <button onClick={onClick}>
      <Row gap={3} justifyContent={'space-between'} alignItems={'center'}>
        <ThumbsIcon
          fill={fill}
          stroke={stroke}
          style={{ transform: type === 'down' ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        <Text size={13} color={colors.black_40}>
          {count}
        </Text>
      </Row>
    </button>
  );
};

export default Thumbs;
