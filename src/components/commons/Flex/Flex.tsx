import React from 'react';
import styled, { css } from 'styled-components';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  borderRadius?: React.CSSProperties['borderRadius'];
  width?: React.CSSProperties['width'];
  children: React.ReactNode;
}

export const Row = (props: FlexProps) => {
  const {
    justifyContent: justify,
    alignItems: align,
    borderRadius: radius,
    children,
    ...others
  } = props;

  return (
    <Flex {...others} justify={justify} align={align} radius={radius} direction={'row'}>
      {children}
    </Flex>
  );
};

export const Col = (props: FlexProps) => {
  const {
    justifyContent: justify,
    alignItems: align,
    borderRadius: radius,
    children,
    ...others
  } = props;

  return (
    <Flex {...others} justify={justify} align={align} radius={radius} direction={'column'}>
      {children}
    </Flex>
  );
};

interface StyledFlexProps {
  direction: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  radius?: React.CSSProperties['borderRadius'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  gap?: React.CSSProperties['gap'];
  width?: React.CSSProperties['width'];
}

const Flex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
    ${({ width = '100%' }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
    ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `}
`;
