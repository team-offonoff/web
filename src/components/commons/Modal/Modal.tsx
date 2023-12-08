import React from 'react';
import { default as ReactModal, Styles } from 'react-modal';

import { zIndex } from '@styles/theme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalStyle: Styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
    backgroundColor: 'white',
    border: '2px solid rgb(240, 240, 240)',
    borderRadius: '12px',
    position: 'absolute',
    height: 'fit-content',
    width: '300px',
    top: '120px',
    left: 'calc(50% - 150px)',
    zIndex: zIndex.modal,
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
    borderRadius: '12px',
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
      {children}
    </ReactModal>
  );
};

export default Modal;

export { ActionModal };
