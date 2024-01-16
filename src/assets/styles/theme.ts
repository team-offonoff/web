import { DefaultTheme } from 'styled-components/dist/types';

export const colors = {
  purple: '#A46FF3',
  sub_purple: '#624392',
  sub_purple2: '#BE28F3',
  navy: '#242036',
  navy2: '#4D3B7C',
  sub_navy2: '#4D3B7C',
  A: '#D04376',
  sub_A: '#DF8AA9',
  B: '#1498AA',
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
      border: `1px solid ${colors.sub_purple2}`,
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
      borderBottom: `1px solid ${colors.sub_navy2}`,
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
      borderBottom: `1px solid ${colors.sub_purple2}`,
      borderRadius: 0,
      backgroundColor: 'transparent',
      outline: 'none',
    },
  },
};

export type InputTypes = keyof typeof input;
