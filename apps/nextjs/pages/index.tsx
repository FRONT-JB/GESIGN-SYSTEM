import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Button } from '@common/components';

const Home: NextPage = () => (
  <Wrapper>
    <Button color="peru" />
    <Button color="green" />
    <Button color="orange" />
    <Button color="blue" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.colors.white}
`;

export default Home;
