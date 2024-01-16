import React from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ClockIcon, CommentIcon, HitIcon, ThumbsIcon } from '@icons/index';

import { IconWrapper } from './NotificationItem.styles';

interface NotificationItem {
  onClick: () => void;
  notification: {
    type: 'hit' | 'comment' | 'like' | 'close';
    title: string;
    date: number;
    checked: boolean;
  };
}

const NotificationItem = ({ onClick, notification }: NotificationItem) => {
  const renderIcon = () => {
    switch (notification.type) {
      case 'close':
        return <ClockIcon />;
      case 'comment':
        return <CommentIcon />;
      case 'hit':
        return <HitIcon />;
      case 'like':
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

  return (
    <Row
      onClick={onClick}
      justifyContent="space-between"
      padding={'24px 20px'}
      style={{ ...(!notification.checked && { backgroundColor: '#2e234a' }) }}
      gap={28}
    >
      <Row gap={16}>
        <IconWrapper>{renderIcon()}</IconWrapper>
        <Col gap={8}>
          <Text size={15} weight={500} color={colors.white}>
            투표가 마감 되었어요, 지금 바로 결과를 확인해 보세요!
          </Text>
          <Text size={14} weight={400} color={colors.sub_purple2}>
            성수 치킨 버거의 종결지는? 성수 치킨 버거의 종결지는?
          </Text>
        </Col>
      </Row>
      <Text size={13} weight={400} color={colors.white_40} style={{ flexShrink: 0 }}>
        방금
      </Text>
    </Row>
  );
};

export default NotificationItem;
