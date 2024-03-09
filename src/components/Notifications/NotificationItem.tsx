import React from 'react';

import { useReadNotification } from '@apis/notification/useNotifications';
import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { NotificationResponse } from '@interfaces/api/notification';

import { colors } from '@styles/theme';

import { ClockIcon, CommentIcon, HitIcon, ThumbsIcon } from '@icons/index';

import { getDateDiff } from '@utils/date';

import { IconWrapper } from './NotificationItem.styles';

interface NotificationItem {
  notification: NotificationResponse;
}

const NotificationItem = ({ notification }: NotificationItem) => {
  const readNotification = useReadNotification(notification.id);

  const renderIcon = () => {
    switch (notification.type) {
      case 'VOTE_RESULT':
        return <ClockIcon />;
      case 'COMMENT_ON_TOPIC':
        return <CommentIcon />;
      case 'VOTE_COUNT_ON_TOPIC':
        return <HitIcon />;
      case 'LIKE_IN_COMMENT':
        return (
          <ThumbsIcon
            stroke={colors.white_40}
            fill={'none'}
            strokeWidth={2}
            width={32}
            height={33}
            style={{ marginLeft: 1 }}
          />
        );
    }
  };

  const handleNotificationClick = () => {
    if (!notification.isRead) {
      readNotification.mutate();
    }
  };

  return (
    <Row
      onClick={handleNotificationClick}
      justifyContent="space-between"
      padding={'24px 20px'}
      style={{ ...(!notification.isRead && { backgroundColor: '#2e234a' }), position: 'relative' }}
      gap={28}
    >
      <Row gap={16}>
        {!notification.isRead && (
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: colors.purple2,
              position: 'absolute',
              left: 18,
              top: 18,
            }}
          />
        )}

        <IconWrapper>{renderIcon()}</IconWrapper>
        <Col gap={8}>
          <Text size={15} weight={500} color={colors.white}>
            {notification.message.title}
          </Text>
          <Text size={14} weight={400} color={colors.purple2}>
            {notification.message.content}
          </Text>
        </Col>
      </Row>
      <Text size={13} weight={400} color={colors.white_40} style={{ flexShrink: 0 }}>
        {getDateDiff(notification.createdAt)} 전
      </Text>
    </Row>
  );
};

export default NotificationItem;
