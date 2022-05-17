import styled from '@emotion/styled';

export const ShadowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
`;
