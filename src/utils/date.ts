import { getDateDistance, getDateDistanceText, TimeUnits } from '@toss/date';

export function getDateDiff(UTCdate: number) {
  const startDate = new Date(UTCdate * 1000);
  const distance = getDateDistance(startDate, new Date());
  return getDateDistanceText(distance, {
    hours: (t: TimeUnits) => t.hours > 0 && t.days < 1,
    minutes: (t: TimeUnits) => t.minutes > 0 && t.hours < 1,
    seconds: (t: TimeUnits) => t.minutes < 1,
  });
}

export function getYYYYMMDD(UTCdate: number) {
  const date = new Date(UTCdate * 1000);
}
