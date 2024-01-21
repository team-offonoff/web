import { DefaultTheme } from 'styled-components/dist/types';

export const colors = {
  purple: '#A46FF3',
  purple_30: 'rgba(164, 111, 243, 0.30)',
  purple_60: 'rgba(164, 111, 243, 0.60)',
  purple2: '#BE28F3',
  navy: '#242036',
  navy_20: 'rgba(36, 32, 54, 0.20)',
  navy_40: 'rgba(36, 32, 54, 0.40)',
  navy_60: 'rgba(36, 32, 54, 0.60)',
  navy_80: 'rgba(36, 32, 54, 0.80)',
  navy2: '#4D3B7C',
  navy2_20: 'rgba(77, 59, 124, 0.20)',
  navy2_40: 'rgba(77, 59, 124, 0.40)',
  navy2_60: 'rgba(77, 59, 124, 0.60)',
  navy2_80: 'rgba(77, 59, 124, 0.80)',
  A: '#D04376',
  A_20: 'rgba(208, 67, 118, 0.20)',
  A_40: 'rgba(208, 67, 118, 0.40)',
  A_60: 'rgba(208, 67, 118, 0.60)',
  A_80: 'rgba(208, 67, 118, 0.80)',
  B: '#1498AA',
  B_20: 'rgba(20, 152, 170, 0.20)',
  B_40: 'rgba(20, 152, 170, 0.40)',
  B_60: 'rgba(20, 152, 170, 0.60)',
  B_80: 'rgba(20, 152, 170, 0.80)',
  black: '#000000',
  white: '#FFFFFF',
  white_20: 'rgba(255, 255, 255, 0.20)',
  black_20: 'rgba(0, 0, 0, 0.20)',
  white_40: 'rgba(255, 255, 255, 0.40)',
  black_40: 'rgba(0, 0, 0, 0.40)',
  white_60: 'rgba(255, 255, 255, 0.60)',
  black_60: 'rgba(0, 0, 0, 0.60)',
  white_80: 'rgba(255, 255, 255, 0.80)',
  black_80: 'rgba(0, 0, 0, 0.80)',
  navywhite_20: '#504D5E',
  navywhite_40: '#7C7986',
  navywhite_60: '#A7A6AF',
  navywhite_80: '#D3D2D7',
};

export const zIndex = {
  navigation: 100,
  toast: 200,
  sheet: 300,
  modal: 400,
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
  zIndex,
};

export const input = {
  t1: {
    default: {
      border: `none`,
      backgroundColor: '#342b52',
    },
    error: {
      border: `1px solid ${colors.purple2}`,
      backgroundColor: '#342b52',
    },
  },
  t2: {
    default: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: '140%',
      padding: '0 0 10px 0',
      border: 'none',
      borderBottom: `1px solid ${colors.navy2}`,
      backgroundColor: 'transparent',
      borderRadius: 0,
      outline: 'none',
    },
    error: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: '140%',
      padding: '0 0 10px 0',
      border: 'none',
      borderBottom: `1px solid ${colors.purple2}`,
      borderRadius: 0,
      backgroundColor: 'transparent',
      outline: 'none',
    },
  },
};

export type InputTypes = keyof typeof input;
