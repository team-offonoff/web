import { styled } from 'styled-components';

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 148px;
  overflow: hidden;
`;

const ASideContainer = styled(SlideContainer)`
  position: relative;
  justify-content: flex-end;
  background-color: #d04376;
  border-top-right-radius: 74px;
  border-bottom-right-radius: 74px;
`;

const BSideContainer = styled(SlideContainer)`
  position: relative;
  justify-content: flex-start;
  background-color: #1498aa;
  border-top-left-radius: 74px;
  border-bottom-left-radius: 74px;
`;

const CrownContainer = styled.div`
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const ResultSlideTextContainer = styled.div`
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  text-align: center;
`;

export { SlideContainer, ASideContainer, BSideContainer, CrownContainer, ResultSlideTextContainer };
