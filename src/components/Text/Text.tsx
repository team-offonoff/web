import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
  tagName?: keyof JSX.IntrinsicElements;
  color?: React.CSSProperties['color'];
  weight?: React.CSSProperties['fontWeight'];
  size?: number;
  align?: React.CSSProperties['textAlign'];
  children: React.ReactNode;
}

const getFontSize = (sizeInPx: number) => `${sizeInPx / 10}rem`;

const Text = (props: TextProps) => {
  const { tagName = 'div', color = '#ffffff', align = 'start', weight, size, children } = props;
  const Tag = styled(tagName)<TextProps>`
    line-height: 140%;
    ${({ align }) =>
      align &&
      css`
        text-align: ${align};
      `}
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
    ${({ weight }) =>
      weight &&
      css`
        font-weight: ${weight};
      `}
   ${({ size }) =>
      size &&
      css`
        font-size: ${getFontSize(size)};
      `}
  `;
  return (
    <Tag color={color} weight={weight} size={size} align={align}>
      {children}
    </Tag>
  );
};

export default Text;
