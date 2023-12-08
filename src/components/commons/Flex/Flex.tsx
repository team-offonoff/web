import React from 'react';
import styled, { css } from 'styled-components';

interface FlexProps {
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  children: React.ReactNode;
}

export const Row = (props: FlexProps) => {
  const { children, justifyContent = 'space-between', alignItems = 'center', ...rest } = props;

  return (
    <Flex flexDirection={'row'} justifyContent={justifyContent} alignItems={alignItems} {...rest}>
      {children}
    </Flex>
  );
};

export const Col = (props: FlexProps) => {
  const { children, justifyContent = 'space-between', alignItems = 'center', ...rest } = props;

  return (
    <Flex
      flexDirection={'column'}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
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
      gap: ${gap};
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
`;
