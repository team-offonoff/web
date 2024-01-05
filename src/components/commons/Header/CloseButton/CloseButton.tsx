import React from 'react';
import { styled } from 'styled-components';

import { CloseIcon } from '@icons/index';

const CloseButton = () => {
  return (
    <Button>
      <CloseIcon />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default CloseButton;
