import React from 'react';
import { default as ReactModal, Styles } from 'react-modal';

import { zIndex } from '@styles/theme';

import { Col } from '../Flex/Flex';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalStyle: Styles = {
  content: {
    display: 'flex',
    transform: 'translateY(-50%)', //
    top: '50%',
    right: '20px',
    left: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    position: 'fixed',
    height: 'fit-content',
    width: 'calc(100% - 40px)',
    padding: 'none',
    border: 'none',
  },
  overlay: {
    zIndex: zIndex.modal,
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};

const actionModalStyle: Styles = {
  content: {
    display: 'flex',
    top: 'initial',
    right: 'initial',
    bottom: '18px',
    left: '6px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '24px',
    position: 'fixed',
    height: 'fit-content',
    width: 'calc(100% - 12px)',
    padding: 'none',
  },
  overlay: {
    zIndex: zIndex.modal,
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={modalStyle} ariaHideApp>
      {children}
    </ReactModal>
  );
};

const ActionModal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={actionModalStyle} ariaHideApp>
      <Col padding={'36px 24px'} gap={20}>
        {children}
      </Col>
    </ReactModal>
  );
};

export default Modal;

export { ActionModal };
