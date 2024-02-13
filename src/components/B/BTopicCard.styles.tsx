import { styled } from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navy2_60};
  backdrop-filter: blur(1.5px);
  border-radius: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 22px;
  background-color: rgb(100 81 155 / 60%);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export { CardContainer, CardFooter };
