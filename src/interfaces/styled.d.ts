import 'styled-components';
import { ColorsTypes } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}
