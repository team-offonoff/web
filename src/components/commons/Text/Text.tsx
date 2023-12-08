import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
  tagName?: keyof JSX.IntrinsicElements;
  color?: React.CSSProperties['color'];
  weight?: React.CSSProperties['fontWeight'];
  size?: number;
  align?: React.CSSProperties['textAlign'];
  lineHeight?: React.CSSProperties['lineHeight'];
  children: React.ReactNode;
}

const getFontSize = (sizeInPx: number) => `${sizeInPx / 10}rem`;

const Text = React.memo((props: TextProps) => {
  const {
    tagName = 'div',
    color = '#ffffff',
    align = 'start',
    lineHeight = '140%',
    weight,
    size,
    children,
  } = props;

  return (
    <Tag
      as={tagName}
      color={color}
      weight={weight}
      size={size}
      align={align}
      lineHeight={lineHeight}
    >
      {children}
    </Tag>
  );
});

const Tag = styled.div<TextProps>`
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `}
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

export default Text;
