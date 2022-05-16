import styled from '@emotion/styled';

import { ThemeType } from '@common/styles';

type ColorTypes = keyof ThemeType['colors'];

interface ColorProps {
  color: ColorTypes;
}

const Color = ({ color }: ColorProps) => (
  <Wrapper>
    <ColorBox colorValue={color} />
  </Wrapper>
);

export default Color;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ColorBox = styled.div<{ colorValue: ColorTypes }>`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: ${({ theme, colorValue }) => theme.colors[colorValue]};
`;
