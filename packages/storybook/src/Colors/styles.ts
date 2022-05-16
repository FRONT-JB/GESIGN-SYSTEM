import styled from '@emotion/styled';

export const ColorWrapper = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-gap: 10px;
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
`;
