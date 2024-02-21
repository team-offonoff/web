import styled from 'styled-components';

import { colors } from '@styles/theme';

import { CommentBoxIcon, CommentIcon } from '@icons/index';

import Text from '../Text/Text';

interface CommentChipProps {
  count: number;
  onClick: () => void;
  backgroundColor?: string;
}

const CommentChip = ({ count, onClick, backgroundColor }: CommentChipProps) => {
  return (
    <Container
      type="button"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor || colors.black_40 }}
    >
      <CommentBoxIcon width={18} height={18} />
      <Text size={13} weight={400} color={colors.white}>
        댓글
      </Text>
      <Text size={13} weight={400} color={colors.white_60}>
        {count}
      </Text>
    </Container>
  );
};

export default CommentChip;

const Container = styled.button`
  display: flex;
  flex-shrink: 0;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  border-radius: 20px;
`;
