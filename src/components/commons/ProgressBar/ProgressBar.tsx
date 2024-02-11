import styled from 'styled-components';

import { colors } from '@styles/theme';

import { Row } from '../Flex/Flex';
import Text from '../Text/Text';

interface ProgressBarProps {
  revealed: boolean;
  highlighted: boolean;
  title: string;
  percentage: number;
  onClick: () => void;
  left?: () => React.ReactNode;
}

const ProgressBar = ({
  revealed,
  highlighted,
  title,
  percentage,
  onClick,
  left,
}: ProgressBarProps) => {
  const textColor = highlighted ? colors.white : colors.white_40;
  const textWeight = revealed ? 600 : 400;

  return (
    <ProgressBarContainer onClick={onClick}>
      <Row
        gap={10}
        justifyContent={'space-between'}
        alignItems={'center'}
        style={{ zIndex: 20, width: 'unset' }}
      >
        {left && left()}
        <Text size={14} weight={textWeight} color={textColor}>
          {title}
        </Text>
      </Row>
      {revealed && (
        <>
          <Text size={14} weight={textWeight} color={textColor} style={{ zIndex: 20 }}>
            {percentage}%
          </Text>
          <PercentageBar highlighted={highlighted} percentage={revealed ? percentage : 0} />
        </>
      )}
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.navy2};
  border-radius: 10px;
`;

const PercentageBar = styled.div<{ percentage: number; highlighted: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: ${({ percentage }) => percentage}%;
  height: 40px;
  background-color: ${({ theme, highlighted }) =>
    highlighted ? theme.colors.purple : theme.colors.purple_30};
  border-radius: 10px;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
`;
