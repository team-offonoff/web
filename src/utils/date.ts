import { getDateDistance, getDateDistanceText, TimeUnits } from '@toss/date';

export function getDateDiff(UTCdate: number) {
  const startDate = new Date(UTCdate * 1000);
  const distance = getDateDistance(startDate, new Date());

  if (!distance.days && !distance.hours && !distance.minutes) {
    return '방금';
  }

  return getDateDistanceText(distance, {
    hours: (t: TimeUnits) => t.days === 0,
    minutes: (t: TimeUnits) => t.days === 0 && t.hours === 0,
    seconds: () => false,
  });
}

export function getYYYYMMDD(UTCdate: number) {
  const date = new Date(UTCdate * 1000);
}
