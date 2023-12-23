import { useMutation } from '@tanstack/react-query';

import client from '@apis/fetch';

const reportTopic = (topicId: number) => {
  return client.post({
    path: `/topics/${topicId}/report`,
    body: {},
  });
};

const useReportTopic = (topicId: number) => {
  return useMutation({ mutationFn: () => reportTopic(topicId) });
};

export default useReportTopic;
