import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
  size: number;
  children: React.ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
  weight?: React.CSSProperties['fontWeight'];
  color?: React.CSSProperties['color'];
  align?: React.CSSProperties['textAlign'];
  lineHeight?: React.CSSProperties['lineHeight'];
  noWrap?: boolean;
}

const getFontSize = (sizeInPx: number) => `${sizeInPx / 10}rem`;

const Text = React.memo((props: TextProps) => {
  const {
    tagName = 'div',
    color = '#ffffff',
    align = 'start',
    lineHeight = '140%',
    noWrap = false,
    weight = 400,
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
      noWrap={noWrap}
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
    ${({ noWrap }) =>
    noWrap &&
    css`
      white-space: nowrap;
    `}
`;

export default Text;
