import { useState, useEffect, useRef } from 'react';

interface UseTimerProps {
  endTime: number;
}

const useTimer = ({ endTime }: UseTimerProps) => {
  const REST_TIME = endTime - Date.now();
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(REST_TIME);
  const [isFinished, setIsFinished] = useState(false);
  const [isLessThanOneHour, setIsLessThanOneHour] = useState(false);

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      setTimeLeft(0);

      setIsFinished(true);
    }

    if (!isLessThanOneHour && timeLeft <= 1000 * 60 * 60) {
      setIsLessThanOneHour(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return { displayTime: `${hours} : ${minutes} : ${second}`, isFinished, isLessThanOneHour };
};

export default useTimer;
