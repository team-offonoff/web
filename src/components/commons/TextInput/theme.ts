import { CSSProperties } from 'react';

import { colors } from '@styles/theme';

export interface TextInputTheme {
  padding: CSSProperties['padding'];
  rounded: boolean;
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  backgroundColor: CSSProperties['backgroundColor'];
  placeholderColor: CSSProperties['color'];
  placeholderSize?: CSSProperties['fontSize'];
}

export const theme1: TextInputTheme = {
  padding: '14px 16px',
  rounded: true,
  fontSize: '1.4rem',
  fontWeight: 600,
  backgroundColor: colors.navy2_40,
  placeholderColor: colors.purple_60,
  placeholderSize: '1.4rem',
};

export const theme2: TextInputTheme = {
  padding: '16px',
  rounded: true,
  fontSize: '1.6rem',
  fontWeight: 500,
  backgroundColor: colors.navy2_40,
  placeholderColor: colors.purple,
  placeholderSize: '1.6rem',
};

export const theme3: TextInputTheme = {
  padding: '10px 0',
  rounded: false,
  fontSize: '2rem',
  fontWeight: 400,
  backgroundColor: 'transparent',
  placeholderColor: colors.purple,
  placeholderSize: '2rem',
};
