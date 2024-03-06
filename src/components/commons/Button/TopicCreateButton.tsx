import { styled } from 'styled-components';

import { colors } from '@styles/theme';

import { DotIcon } from '@icons/index';

import { Row } from '../Flex/Flex';
import Text from '../Text/Text';

interface TopicCreateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  topicType: 'A' | 'B';
  disabled: boolean;
  title: string;
  step?: 1 | 2;
}

const TopicCreateButton = ({
  onClick,
  disabled,
  title,
  topicType,
  step,
  ...rest
}: TopicCreateButtonProps) => {
  return (
    <StyledButton topicType={topicType} onClick={onClick} disabled={disabled} {...rest}>
      {step && disabled ? (
        <Row gap={8}>
          <Text size={16} weight={700} color={colors.white_60} align="start">
            {title}
          </Text>
          <DotIcon />
          <Text size={16} weight={700} color={colors.white_60} align="start">
            {step === 1 ? '1/2' : '2/2'}
          </Text>
        </Row>
      ) : (
        <Text size={16} weight={700} color={colors.white}>
          {title}
        </Text>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ topicType: 'A' | 'B' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${(props) => (props.topicType === 'A' ? colors.A : colors.B)};
  border-radius: 10px;
`;

export default TopicCreateButton;
