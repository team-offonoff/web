// Timer.tsx
type TimerCallback = (timeString: string) => void;

export const startTimer = (serverTime: number, callback: TimerCallback): void => {
  let lastTimeString = '24 : 00 : 00'; // 초기값 설정

  const interval = setInterval(() => {
    const currentTime = new Date();
    const targetTime = new Date(serverTime);
    const remainingTime = targetTime.getTime() - currentTime.getTime();

    if (remainingTime <= 0) {
      clearInterval(interval);
      callback('00 : 00 : 00');
      lastTimeString = '00 : 00 : 00';
      return;
    }

    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    lastTimeString = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(
      2,
      '0'
    )} : ${String(seconds).padStart(2, '0')}`;
    callback(lastTimeString);
  }, 1000);
};
