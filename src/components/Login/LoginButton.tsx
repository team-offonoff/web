import React from 'react';

import { Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { LoginButton as Button } from '@routes/Auth/login/Login.styles';

import { colors } from '@styles/theme';

interface LoginButtonProps {
  onClick: () => void;
  backgroundColor: string;
  color?: string;
  Icon: () => React.ReactNode;
  buttonText: string;
}

const LoginButton = ({
  onClick,
  backgroundColor,
  color = colors.black,
  Icon,
  buttonText,
}: LoginButtonProps) => (
  <Button onClick={onClick} style={{ backgroundColor }}>
    <Row padding={'15px 20px'} justifyContent={'space-between'}>
      <Icon />
      <Text size={16} color={color} weight={'bold'}>
        {buttonText}
      </Text>
      <div style={{ width: 18, height: 18 }} />
    </Row>
  </Button>
);

export default LoginButton;
