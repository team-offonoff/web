import { DefaultTheme } from 'styled-components/dist/types';

export const colors = {
  purple: '#A46FF3',
  navy: '#242036',
  navy2: '#4D3B7C',
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
  modal: 200,
  toast: 300,
  sheet: 400,
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
  zIndex,
};
