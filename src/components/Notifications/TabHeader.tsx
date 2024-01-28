import React from 'react';

import { Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { NOTIFICATIONS_TABS } from '@routes/Notification/Notification';
import { SelectedTabIndicator } from '@routes/Notification/Notification.styles';

import { colors } from '@styles/theme';

interface TabHeaderProps {
  currentTab: (typeof NOTIFICATIONS_TABS)[number];
  setCurrentTab: React.Dispatch<React.SetStateAction<(typeof NOTIFICATIONS_TABS)[number]>>;
}

const TabHeader = ({ currentTab, setCurrentTab }: TabHeaderProps) => {
  const handleTabClick = (tabName: (typeof NOTIFICATIONS_TABS)[number]) => {
    setCurrentTab(tabName);
  };
  return (
    <Row justifyContent={'center'} gap={45} padding={'30px 0 24px 0'} style={{ height: 76 }}>
      {NOTIFICATIONS_TABS.map((tabName) => {
        return (
          <div
            key={tabName}
            style={{ position: 'relative' }}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName === currentTab && <SelectedTabIndicator />}
            <Text
              size={18}
              weight={600}
              color={tabName === currentTab ? colors.purple2 : colors.white}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {tabName}
            </Text>
          </div>
        );
      })}
    </Row>
  );
};

export default TabHeader;
