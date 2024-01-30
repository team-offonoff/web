import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: number;
  tagName?: keyof JSX.IntrinsicElements;
  weight?: React.CSSProperties['fontWeight'];
  color?: React.CSSProperties['color'];
  align?: React.CSSProperties['textAlign'];
  lineHeight?: React.CSSProperties['lineHeight'];
  noWrap?: boolean;
}

const getFontSize = (sizeInPx: number) => `${sizeInPx / 10}rem`;

const Text = React.memo((props: TextProps) => {
  const { tagName = 'div', children, size = 16, ...others } = props;

  return (
    <StyledText {...others} as={tagName} size={size}>
      {children}
    </StyledText>
  );
});

const StyledText = styled('div')<TextProps>`
  ${({ lineHeight = 1.4 }) =>
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
