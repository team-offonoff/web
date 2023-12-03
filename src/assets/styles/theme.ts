import { DefaultTheme } from 'styled-components/dist/types';

export const colors = {
  purple: '#A46FF3',
  navy: '#242036',
  navy2: '#4D3B7C',
  A: '#D04376',
  B: '#1498AA',
  black: '#000000',
  white: '#FFFFFF',
  white_20: 'rgba(255, 255, 255, 0.20)',
  white_40: 'rgba(255, 255, 255, 0.40)',
  white_60: 'rgba(255, 255, 255, 0.60)',
  white_80: 'rgba(255, 255, 255, 0.80)',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
