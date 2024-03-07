import { styled } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white_20};
`;

export { Container };
