import styled from 'styled-components';

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 325px;
  height: 148px;
  padding: 0 44px;
  overflow: hidden;
`;

export const AlphaSideContainer = styled(SlideContainer)`
  justify-content: flex-end;
  background-image: linear-gradient(270deg, #d04376 56.25%, transparent 100%);
  border-top-right-radius: 74px;
  border-bottom-right-radius: 74px;
`;

export const BetaSideContainer = styled(SlideContainer)`
  justify-content: flex-start;
  background: linear-gradient(90deg, #1498aa 56.25%, rgb(20 152 170 / 0%) 100%);
  border-top-left-radius: 74px;
  border-bottom-left-radius: 74px;
`;
