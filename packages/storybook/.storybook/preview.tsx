import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '@storybook/theming';

import { globalStyles, theme } from '@common/styles';

export const decorators: DecoratorFn[] = [
  Story => (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
