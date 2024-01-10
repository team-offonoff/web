import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { CloseIcon } from '@icons/index';

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  const navigate = useNavigate();

  function handleCloseButtonClick() {
    navigate(-1);
  }

  return (
    <Button onClick={onClick ? onClick : handleCloseButtonClick}>
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
