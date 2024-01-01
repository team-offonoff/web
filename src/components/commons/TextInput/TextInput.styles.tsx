import { styled } from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  border-radius: 10px;

  &:focus {
    outline: none;
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
  top: 14px;
  right: 16px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -28px;
  left: 16px;
`;

export { StyledInput, InputContainer, InputPrefix, InputSuffix, ErrorMessage };
