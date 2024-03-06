import { useQuery } from '@tanstack/react-query';

import client from '@apis/fetch';

export const NOTICE_KEY = 'notifications';

const getNotifications = () => {
  return client.get('/notifications');
};

const getUnreadNotifications = () => {
  return client.get('/notifications/counts/unchecked');
};

const useNotifications = () => {
  return useQuery({
    queryKey: [NOTICE_KEY],
    queryFn: getNotifications,
  });
};

const useUnreadNotifications = () => {
  return useQuery({
    queryKey: [NOTICE_KEY, 'unread'],
    queryFn: getUnreadNotifications,
  });
};

export { useNotifications, useUnreadNotifications };
