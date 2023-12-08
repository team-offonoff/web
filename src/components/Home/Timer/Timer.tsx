import React from 'react';
import { styled } from 'styled-components';

import useTimer from '@hooks/useTimer/useTimer';

import { colors } from '@styles/theme';

interface TimerProps {
  endTime: number;
}

const Timer = ({ endTime }: TimerProps) => {
  const timer = useTimer({
    endTime: endTime,
  });

  return (
    <TimerContainer>
      <TimerChip isLessThanOneHour={timer.isLessThanOneHour}>{timer.displayTime}</TimerChip>
    </TimerContainer>
  );
};

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 37px;
`;

export const TimerChip = styled.div<{ isLessThanOneHour: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 30px;
  padding: 2px 0 0;
  font-family: 'Montserrat Medium', 'Noto Sans KR', sans-serif;
  font-size: 1.6rem;
  line-height: 0%;
  color: ${(props) => (props.isLessThanOneHour ? colors.navy2 : 'rgba(255, 255, 255, 0.80)')};
  text-align: center;
  background-color: ${(props) => (props.isLessThanOneHour ? props.theme.colors.purple : '#3c3457')};
  border-radius: 50px;
`;

export default Timer;
