import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onClick ? onClick : handleBackButtonClick}>
      <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 5px;
  cursor: pointer;
`;

export default BackButton;
