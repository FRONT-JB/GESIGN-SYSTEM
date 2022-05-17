import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import {
  BLUE_SHADOWS,
  BRONZE_SHADOWS,
  GRAY_BLUE_SHADOWS,
  GREEN_SHADOWS,
  ORANGE_SHADOWS,
  PINK_SHADOWS,
  PURPLE_SHADOWS,
  RED_SHADOWS,
  TEAL_BLUE_SHADOWS,
  TIFFANY_SHADOWS,
  YELLOW_SHADOWS,
} from './shadowList';
import { ShadowWrapper } from './styles';

import Shadow from '.';

export default {
  title: 'Theme/Shadows',
  component: Shadow,
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

export const Basic: Story = () => (
  <Shadow shadow="red_100_10b" backgroundColor="red" />
);
Basic.args = {
  text: 'Color Value',
};

export const ColorList = () => (
  <ShadowWrapper>
    <div>
      {RED_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="red" />
      ))}
    </div>
    <div>
      {YELLOW_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="yellow" />
      ))}
    </div>
    <div>
      {GREEN_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="green" />
      ))}
    </div>
    <div>
      {TEAL_BLUE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="teal_blue" />
      ))}
    </div>
    <div>
      {PINK_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="pink" />
      ))}
    </div>
    <div>
      {BRONZE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="bronze" />
      ))}
    </div>
    <div>
      {TIFFANY_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="tiffany" />
      ))}
    </div>
    <div>
      {BLUE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="blue" />
      ))}
    </div>
    <div>
      {ORANGE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="orange" />
      ))}
    </div>
    <div>
      {PURPLE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="purple" />
      ))}
    </div>
    <div>
      {GRAY_BLUE_SHADOWS.map(shadow => (
        <Shadow shadow={shadow} backgroundColor="gray_blue_10" />
      ))}
    </div>
  </ShadowWrapper>
);
