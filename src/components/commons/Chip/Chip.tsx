import React from 'react';
import { styled } from 'styled-components';

import Text from '../Text/Text';

interface ChipProps {
  tintColor: string;
  label: string;
}

const Chip = ({ tintColor, label }: ChipProps) => {
  return (
    <Container color={tintColor}>
      <Dot color={tintColor} />
      <Text size={13} weight={600} color={tintColor}>
        {label}
      </Text>
    </Container>
  );
};

const Dot = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

const Container = styled.button<{ color: string }>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 2px 10px;
  background-color: ${({ color }) => {
    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      return [r, g, b];
    };
    const [r, g, b] = hexToRgb(color);
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  }};
  border-radius: 20px;
`;

export default Chip;
