import React, { useState } from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import NotificationItem from '@components/Notifications/NotificationItem';
import TabHeader from '@components/Notifications/TabHeader';

import { colors } from '@styles/theme';

import { Container } from './Notification.styles';

export const NOTIFICATIONS_TABS = ['투표한 토픽', '작성한 토픽'] as const;

const Notification = () => {
  const [currentTab, setCurrentTab] = useState<(typeof NOTIFICATIONS_TABS)[number]>(
    NOTIFICATIONS_TABS[0]
  );

  const notifications: {
    type: 'hit' | 'comment' | 'like' | 'close';
    title: string;
    date: number;
    checked: boolean;
  }[] = [
    {
      // 투표가 마감 되었어요, 지금 바로 결과를 확인해 보세요!
      type: 'close',
      title: '성수 치킨 버거의 종결지는? 성수 치킨 버거의 종결지는?',
      date: 1800000000,
      checked: false,
    },
    {
      // 다른 사용자가 내 댓글에 좋아요를 눌렀어요.
      type: 'like',
      title: '강아지상? 고양이상?',
      date: 1803204000,
      checked: false,
    },
    {
      // 내가 만든 토픽에 누군가가 댓글을 남겼어요 바로 확인해 볼까요?
      type: 'comment',
      title: '강아지상? 고양이상?',
      date: 1803204000,
      checked: true,
    },
    {
      // 내가 만든 토픽의 투표수가 {#100단위}을 돌파했어요!
      type: 'hit',
      title: '강아지상? 고양이상?',
      date: 1803204000,
      checked: true,
    },
    {
      // 내가 만든 토픽에 누군가가 댓글을 남겼어요 바로 확인해 볼까요?
      type: 'comment',
      title: '강아지상? 고양이상?',
      date: 1803244000,
      checked: false,
    },
    {
      // 투표가 마감 되었어요, 지금 바로 결과를 확인해 보세요!
      type: 'close',
      title: '성수 치킨 버거의 종결지는? 성수 치킨 버거의 종결지는?',
      date: 1800260000,
      checked: true,
    },
  ];

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderCenter={() => (
        <Text size={20} weight={600} color={colors.white}>
          알림
        </Text>
      )}
    >
      <Container>
        <TabHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Col style={{ overflowY: 'auto', height: 'fill-available' }}>
          {notifications.map((notification, index) => {
            return (
              <NotificationItem
                key={index}
                notification={notification}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            );
          })}
        </Col>
      </Container>
    </Layout>
  );
};

export default Notification;
