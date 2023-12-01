import React from 'react';
import { styled } from 'styled-components';

import { AlarmIcon } from '@icons/index';

const NotificationButton = () => {
  return (
    <AlarmButton>
      <AlarmIcon />
    </AlarmButton>
  );
};

const AlarmButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default NotificationButton;
