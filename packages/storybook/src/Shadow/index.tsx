import styled from '@emotion/styled';

import { ThemeType } from '@common/styles';

type ShadowTypes = keyof ThemeType['shadow'];
type ColorTypes = keyof ThemeType['colors'];

interface ShadowProps {
  shadow: ShadowTypes;
  backgroundColor: ColorTypes;
}

const Shadow = ({ shadow, backgroundColor }: ShadowProps) => (
  <Wrapper>
    <Shadows shadowName={shadow} backgroundColor={backgroundColor} />
  </Wrapper>
);

export default Shadow;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Shadows = styled.div<{
  shadowName: ShadowTypes;
  backgroundColor: ColorTypes;
}>`
  width: 30px;
  height: 30px;
  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  border-radius: 50%;
  box-shadow: ${({ theme, shadowName }) =>
    shadowName && theme.shadow[shadowName]};
`;
