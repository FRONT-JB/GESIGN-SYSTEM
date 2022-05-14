import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import { Button } from '@common/components';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    Str => (
      <div
        css={css`
          button + button {
            margin-left: 10px;
          }
        `}
      >
        <Str />
      </div>
    ),
  ],
} as Meta;

export const Basic: Story = () => <Button color="peru" />;
Basic.args = {
  text: '버튼',
};

export const Colors = () => (
  <>
    <Button color="peru" />
    <Button color="green" />
  </>
);
