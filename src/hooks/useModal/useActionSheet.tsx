import { useState, useCallback } from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import { ActionModal } from '@components/commons/Modal/Modal';
import Text from '@components/commons/Text/Text';
import { ModalDivider } from '@routes/MyPage/MyPage.styles';

import { colors } from '@styles/theme';

interface Confirm {
  description: string;
  label: string;
  onConfirm: () => void;
  onCancle?: () => void;
}

interface Action {
  icon: React.FunctionComponent;
  label: string;
  onClick?: () => void;
  confirm?: Confirm;
}

interface UseActionSheetProps {
  actions: Action[];
}

const useActionSheet = ({ actions }: UseActionSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState<Confirm>();

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const Modal = () => (
    <ActionModal isOpen={isOpen} onClose={toggleModal}>
      {confirm ? (
        <Col
          style={{ width: '100%' }}
          padding={'16px 0px 0px 0px'}
          gap={0}
          justifyContent="center"
          alignItems="center"
        >
          <Text style={{ paddingBottom: 8 }} size={15} weight={400} color={colors.black_60}>
            {confirm.description}
          </Text>
          <Text
            onClick={confirm.onConfirm}
            style={{ width: '100%', padding: '22px 0px' }}
            size={18}
            weight={500}
            color={colors.purple2}
          >
            {confirm.label}
          </Text>
          <ModalDivider />
          <Text
            onClick={() => {
              confirm.onCancle && confirm.onCancle();
              toggleModal();
            }}
            style={{ width: '100%', padding: '22px 0px' }}
            size={18}
            weight={500}
            color={colors.black_40}
          >
            취소
          </Text>
        </Col>
      ) : (
        <Col padding={'36px 24px'} gap={20}>
          {actions.map((action) => {
            const handleActionClick = () => {
              if (action.confirm) {
                setConfirm(action.confirm);
              } else {
                if (action.onClick) {
                  action.onClick();
                }
              }
            };
            return (
              <button onClick={handleActionClick}>
                <Row alignItems={'center'} gap={14}>
                  <action.icon />
                  <Text size={16} weight={500}>
                    {action.label}
                  </Text>
                </Row>
              </button>
            );
          })}
        </Col>
      )}
    </ActionModal>
  );

  return { Modal, toggleModal };
};

export default useActionSheet;
