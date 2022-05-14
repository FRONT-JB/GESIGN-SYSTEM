import { ThemeTypes } from './types';
import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ThemeTypes {}
}
