import styled from 'styled-components';

import { colors } from '@styles/theme';

import { CommentIcon } from '@icons/index';

import Text from '../Text/Text';

interface CommentChipProps {
  count: number;
  onClick: () => void;
}

const CommentChip = ({ count, onClick }: CommentChipProps) => {
  return (
    <Container type="button" onClick={onClick}>
      <CommentIcon width={18} height={18} />
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
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.colors.black_40};
  border-radius: 20px;
`;
