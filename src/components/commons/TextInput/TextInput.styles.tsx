import { css, styled } from 'styled-components';

const StyledInput = styled.input<{ hasLeft: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  ${({ hasLeft }) =>
    hasLeft &&
    css`
      padding-left: 35px;
    `}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple};
    opacity: 0.6;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputPrefix = styled.div`
  position: absolute;
  top: 14px;
  left: 16px;
`;

const InputSuffix = styled.div`
  position: absolute;
  right: 16px;
  bottom: calc(50% - 10px);
  transform: translateY(-50%);
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
`;

export { StyledInput, InputContainer, InputPrefix, InputSuffix, ErrorMessage };
