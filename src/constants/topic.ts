interface TopicDeadline {
  label: string;
  value: number;
}

export const TOPIC_DEADLINES: TopicDeadline[] = Array.from({ length: 24 }, (_, i) => {
  const hoursToAdd = i + 1;
  const date = new Date();
  date.setHours(date.getHours() + hoursToAdd);

  return {
    label: `${hoursToAdd}시간`,
    value: Math.floor(date.getTime() / 1000),
  };
});
