import 'styled-components';
import { ColorsTypes, ZIndexTypes } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    zIndex: ZIndexTypes;
  }
}
