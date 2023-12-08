import { useCallback, useState } from 'react';

import DefaultModal, { ActionModal } from '@components/commons/Modal/Modal';

const useModal = (type: 'default' | 'action' = 'default') => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const ModalComponent = type === 'default' ? DefaultModal : ActionModal;

  const Modal = ({ children }: { children: React.ReactNode }) => (
    <ModalComponent isOpen={isOpen} onClose={toggleModal}>
      {children}
    </ModalComponent>
  );

  return { Modal: isOpen ? Modal : () => null, toggleModal };
};

export default useModal;
