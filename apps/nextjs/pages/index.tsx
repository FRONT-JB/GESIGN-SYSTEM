import type { NextPage } from 'next';

import { Button } from '@common/ui';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Button />
    <Button />
  </div>
);

export default Home;
