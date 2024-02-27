import { useQuery } from '@tanstack/react-query';

import client from '@apis/fetch';

export const NOTICE_KEY = 'notifications';

const getNotifications = () => {
  return client.get('/notifications');
};

const useNotifications = () => {
  return useQuery({
    queryKey: [NOTICE_KEY],
    queryFn: getNotifications,
  });
};

export { useNotifications };
