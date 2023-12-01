import { DefaultTheme } from 'styled-components/dist/types';

export const colors = {
  purple: '#A46FF3',
  navy: '#242036',
  navy2: '#4D3B7C',
  A: '#D04376',
  B: '#1498AA',
  black: '#000000',
  white: '#FFFFFF',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
