import React from 'react';

import { colors } from '@styles/theme';

import { Col } from '../Flex/Flex';
import Text from '../Text/Text';

interface InputFieldProps {
  label: string;
  children: React.ReactNode;
}

const InputField = ({ label, children }: InputFieldProps) => {
  return (
    <Col gap={10}>
      <Text size={18} weight={'bold'} color={colors.white}>
        {label}
      </Text>
      {children}
    </Col>
  );
};

export default InputField;
