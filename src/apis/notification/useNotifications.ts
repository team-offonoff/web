import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { NotificationResponse } from '@interfaces/api/notification';

import client from '@apis/fetch';

export const NOTICE_KEY = 'notifications';

const getNotifications = () => {
  return client.get<NotificationResponse[]>('/notifications');
};

const getUnreadNotifications = () => {
  return client.get<number>('/notifications/counts/unread ');
};

const readNotification = (id: number) => {
  return client.post({ path: `/notifications/${id}/read`, body: {} });
};

const useNotifications = () => {
  return useQuery({
    queryKey: [NOTICE_KEY],
    queryFn: getNotifications,
    refetchOnMount: true,
  });
};

const useUnreadNotifications = () => {
  return useQuery({
    queryKey: [NOTICE_KEY, 'unread'],
    queryFn: getUnreadNotifications,
    refetchOnMount: true,
  });
};

const useReadNotification = (notificationId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => readNotification(notificationId),
    onMutate: () => {
      queryClient.setQueryData([NOTICE_KEY], (prev: NotificationResponse[]) =>
        prev.map((item) => (item.id === notificationId ? { ...item, isRead: true } : item))
      );
    },
  });
};

export { useNotifications, useUnreadNotifications, useReadNotification };
