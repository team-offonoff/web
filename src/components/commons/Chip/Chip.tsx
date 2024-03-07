import React from 'react';
import { styled } from 'styled-components';

import Text from '../Text/Text';

interface ChipProps {
  icon: React.ReactNode;
  tintColor: string;
  label: string;
}

const Chip = ({ icon, tintColor, label }: ChipProps) => {
  return (
    <Container color={tintColor}>
      {icon}
      <Text size={13} weight={600} color={tintColor}>
        {label}
      </Text>
    </Container>
  );
};

const Container = styled.button<{ color: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 2px 10px;
  background-color: ${({ color }) => {
    return `${color}33`;
  }};
  border-radius: 20px;
`;

export default Chip;
