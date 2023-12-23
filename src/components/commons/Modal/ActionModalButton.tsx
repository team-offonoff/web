import React from 'react';

import { Row } from '../Flex/Flex';
import Text from '../Text/Text';

interface ActionModalButtonProps {
  handleClick: () => void;
  Icon: () => React.ReactNode;
  label: string;
}

const ActionModalButton = ({ handleClick, Icon, label }: ActionModalButtonProps) => {
  return (
    <button onClick={handleClick}>
      <Row alignItems={'center'} gap={14}>
        <Icon />
        <Text size={16} weight={500}>
          {label}
        </Text>
      </Row>
    </button>
  );
};

export default ActionModalButton;
