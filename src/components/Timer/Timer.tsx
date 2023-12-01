import React from 'react';
import { styled } from 'styled-components';

import useTimer from '@hooks/useTimer';

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
  margin-top: 37px;
`;

export const TimerChip = styled.div<{ isLessThanOneHour: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 37px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.isLessThanOneHour ? '#3C3457' : 'rgb(255 255 255 / 40%)')};
  text-align: center;
  background-color: ${(props) => (props.isLessThanOneHour ? props.theme.colors.purple : '#3c3457')};
  border-radius: 50px;
`;

export default Timer;
