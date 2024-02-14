interface TopicDeadline {
  label: string;
  value: number;
}

export const TOPIC_DEADLINES: TopicDeadline[] = Array.from({ length: 24 }, (_, i) => {
  const hoursToAdd = i + 1;

  return {
    label: `${hoursToAdd}시간`,
    value: i + 1,
  };
});
