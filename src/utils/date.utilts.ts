export const getTimestampForHoursFromNow = (hours: number): number => {
  const now: Date = new Date();
  const hoursInMillis: number = hours * 60 * 60 * 1000;
  const targetTime: Date = new Date(now.getTime() + hoursInMillis);
  return targetTime.getTime();
};

export const getTimestampForDaysFromNow = (days: number): number => {
  const today: Date = new Date();
  const targetDate: Date = new Date();
  targetDate.setDate(today.getDate() + days);
  return targetDate.getTime();
};
