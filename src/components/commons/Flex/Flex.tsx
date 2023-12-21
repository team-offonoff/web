import React from 'react';
import styled, { css } from 'styled-components';

interface FlexProps {
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  borderRadius?: React.CSSProperties['borderRadius'];
  children: React.ReactNode;
}

export const Row = (props: FlexProps) => {
  const { children, ...others } = props;

  return (
    <Flex {...others} flexDirection={'row'}>
      {children}
    </Flex>
  );
};

export const Col = (props: FlexProps) => {
  const { children, ...others } = props;

  return (
    <Flex {...others} flexDirection={'column'}>
      {children}
    </Flex>
  );
};

interface StyledFlexProps extends Omit<FlexProps, 'children'> {
  flexDirection: React.CSSProperties['flexDirection'];
}

const Flex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  width: 100%;
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
    ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
`;
