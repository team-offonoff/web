const TopicStatus = {
  VOTING: 'VOTING',
  CLOSED: 'CLOSED',
} as const;

type TopicStatusType = keyof typeof TopicStatus;

export { TopicStatus };
export type { TopicStatusType };
