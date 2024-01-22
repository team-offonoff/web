import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { AlarmIcon } from '@icons/index';

const NotificationButton = () => {
  const navigate = useNavigate();

  return (
    <AlarmButton onClick={() => navigate('/notifications')}>
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
