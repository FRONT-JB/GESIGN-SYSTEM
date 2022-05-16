import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import {
  BLACK_COLOR,
  BLUE_COLOR,
  BRONZE_COLOR,
  GRAY_BLUE_COLOR,
  GREEN_COLOR,
  ORANGE_COLOR,
  PINK_COLOR,
  PURPLE_COLOR,
  RED_COLOR,
  TEAL_BLUE_COLOR,
  TIFFANY_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from './colorList';
import { ColorWrapper } from './styles';

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

export const ColorList = () => (
  <ColorWrapper>
    <div>
      {BLACK_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {WHITE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {BLUE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {ORANGE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {PURPLE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {RED_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {YELLOW_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {GREEN_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {TEAL_BLUE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {PINK_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {BRONZE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {TIFFANY_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
    <div>
      {GRAY_BLUE_COLOR.map(color => (
        <Color key={color} color={color} />
      ))}
    </div>
  </ColorWrapper>
);
