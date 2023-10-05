import { useState, useEffect, useRef } from 'react';

interface UseTimerProps {
  endTime: number;
}

const useTimer = ({ endTime }: UseTimerProps) => {
  const REST_TIME = endTime - Date.now();
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(REST_TIME);
  const [isFinished, setIsFinished] = useState(false);
  const [isOneHour, setIsOneHour] = useState(false);

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      setIsFinished(true);
      console.log('타이머가 종료되었습니다.');
    }

    if (!isOneHour && timeLeft <= 1000 * 60 * 60) {
      setIsOneHour(true);
      console.log('타이머가 1시간 이내 입니다.');
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return { timeString: `${hours} : ${minutes} : ${second}`, isFinished, isOneHour };
};

export default useTimer;
