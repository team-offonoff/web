import { css, styled } from 'styled-components';

import { TextInputTheme } from './theme';

const StyledInput = styled.input<{ inputTheme: TextInputTheme }>`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
  appearance: none;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ inputTheme }) => inputTheme.placeholderColor};
    opacity: 0.6;
  }
`;

const InputContainer = styled.div<{ hasError: boolean; inputTheme: TextInputTheme }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ inputTheme }) => inputTheme.padding};
  background-color: ${({ inputTheme }) => inputTheme.backgroundColor};
  border-bottom: ${({ inputTheme, theme, hasError }) =>
    !inputTheme.rounded && `1px solid ${hasError ? theme.colors.purple2 : theme.colors.navy2}`};
  border-radius: ${({ inputTheme }) => inputTheme.rounded && '10px'};
  box-shadow: ${({ theme, inputTheme, hasError }) =>
    hasError && inputTheme.rounded && `0 0 0 1px ${theme.colors.purple2} inset`};
`;

const InputPrefix = styled.div`
  margin-right: 10px;
`;

const InputSuffix = styled.div``;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
`;

export { StyledInput, InputContainer, InputPrefix, InputSuffix, ErrorMessage };
