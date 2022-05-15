import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import Color from '.';

export default {
  title: 'Theme/Colors',
  component: Color,
  decorators: [
    Str => (
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 5px;
        `}
      >
        <Str />
      </div>
    ),
  ],
} as Meta;

export const Basic: Story = () => <Color color="black" />;
Basic.args = {
  text: 'Color Value',
};

export const Colors = () => (
  <>
    <Color color="black_90" />
    <Color color="black_80" />
    <Color color="black_70" />
    <Color color="black_60" />
    <Color color="black_50" />
    <Color color="black_40" />
    <Color color="black_30" />
    <Color color="black_20" />
    <Color color="black_10" />
    <Color color="black_5" />
  </>
);
