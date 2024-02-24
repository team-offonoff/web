import { useMutation } from '@tanstack/react-query';

import client from '@apis/fetch';

const hideTopic = (topicId: number) => {
  return client.patch({
    path: `/topics/${topicId}/hide?hide=true`,
    body: {},
  });
};

const useHideTopic = (topicId: number) => {
  return useMutation({ mutationFn: () => hideTopic(topicId) });
};

export default useHideTopic;
