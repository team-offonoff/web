import React, { useState } from 'react';

import { useNotifications } from '@apis/notification/useNotifications';
import { Col } from '@components/commons/Flex/Flex';
import BackButton from '@components/commons/Header/BackButton/BackButton';
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
  const { data: notifications } = useNotifications();

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={<BackButton />}
      HeaderCenter={
        <Text size={20} weight={600} color={colors.white}>
          알림
        </Text>
      }
    >
      <Container>
        {/* <TabHeader currentTab={currentTab} setCurrentTab={setCurrentTab} /> */}
        <Col style={{ overflowY: 'auto', height: 'fill-available' }}>
          {notifications?.map((notification, index) => {
            return <NotificationItem key={index} notification={notification} />;
          })}
        </Col>
      </Container>
    </Layout>
  );
};

export default Notification;
