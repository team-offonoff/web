import { useMutation, useQuery } from '@tanstack/react-query';

import { CHOICE_OPTIONS, ChoiceContent, TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

export const TOPIC_KEY = 'topics';

interface Choice {
  choiceId: number;
  choiceContentRequest: ChoiceContent;
  choiceOption: typeof CHOICE_OPTIONS.CHOICE_A | typeof CHOICE_OPTIONS.CHOICE_B;
}

interface TopicCreateRequestDTO {
  side: string;
  keywordName: string;
  title: string;
  choices: Choice[];
  deadline: number;
}

const getTopics = () => {
  return client.get<PagingDataResponse<TopicResponse>>('/topics/info/voting');
};

const useTopics = () => {
  return useQuery({ queryKey: [TOPIC_KEY], queryFn: getTopics });
};

const createTopics = (req: TopicCreateRequestDTO) => {
  return client.post({
    path: `/topics`,
    body: req,
  });
};

const useCreateTopics = () => {
  return useMutation({ mutationFn: createTopics });
};

export default useTopics;

export { useCreateTopics };
