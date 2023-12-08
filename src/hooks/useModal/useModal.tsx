import { useState } from 'react';

import { default as DefaultModal, ActionModal } from '@components/commons/Modal/Modal';

const useModal = (type: 'default' | 'action' = 'default') => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const Modal = ({ children }: { children: React.ReactNode }) =>
    type === 'default' ? (
      <DefaultModal isOpen={isOpen} onClose={toggleModal}>
        {children}
      </DefaultModal>
    ) : (
      <ActionModal isOpen={isOpen} onClose={toggleModal}>
        {children}
      </ActionModal>
    );

  return { Modal: isOpen ? Modal : () => null, toggleModal };
};

export default useModal;
