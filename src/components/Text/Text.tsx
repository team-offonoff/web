import React from 'react';
import styled, { css } from 'styled-components';

type TextWeight = 'regular' | 'semibold' | 'bold';
const fontWeight: Record<TextWeight, number> = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

export interface TextProps {
  tagName?: keyof JSX.IntrinsicElements;
  color?: string;
  weight?: TextWeight;
  size?: number;
  children: React.ReactNode;
}

const getFontSize = (sizeInPx: number) => `${sizeInPx / 10}rem`;

const Text = (props: TextProps) => {
  const { tagName = 'div', color = '#ffffff', weight, size, children } = props;
  const Tag = styled(tagName)<TextProps>`
    line-height: 140%;
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
    ${({ weight }) =>
      weight &&
      css`
        font-weight: ${fontWeight[weight]};
      `}
   ${({ size }) =>
      size &&
      css`
        font-size: ${getFontSize(size)};
      `}
  `;
  return (
    <Tag color={color} weight={weight} size={size}>
      {children}
    </Tag>
  );
};

export default Text;
