import { ReactNode } from 'react';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import styled, { keyframes } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const toastifyTrackProgress = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

export const StyledToastConatiner = styled(ToastContainer)`
  /* stylelint-disable-next-line selector-class-pattern */
  .Toastify__toast {
    padding: 50px 0 8px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.purple};

    /* stylelint-disable-next-line selector-class-pattern */
    .Toastify__toast-body {
      padding: 0;
    }
  }

  /* .Toastify__toast--info {
  } */

  /* .Toastify__toast--success {
  } */

  /* .Toastify__toast--error {
  } */

  /* stylelint-disable-next-line selector-class-pattern */
  .Toastify__progress-bar {
    animation: ${toastifyTrackProgress} linear 1;
  }
`;

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const Toast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      icon: false,
      ...defaultToastOption,
      ...options,
    });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      //   icon: <Icon name="check-circle" stroke={white} />,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      icon: false,
      ...options,
    });
  },
};
