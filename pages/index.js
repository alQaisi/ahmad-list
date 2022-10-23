import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ahmad List | Home</title>
        <meta name='keywords' content="Ahmad"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar sapien. Tincidunt arcu non sodales neque sodales ut etiam. Quam lacus suspendisse faucibus interdum. Elementum nisi quis eleifend quam adipiscing vitae proin. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Posuere morbi leo urna molestie at elementum eu facilisis. In egestas erat imperdiet sed euismod nisi porta lorem. Cursus sit amet dictum sit amet. Ut faucibus pulvinar elementum integer enim neque. Porttitor massa id neque aliquam vestibulum morbi blandit. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Viverra vitae congue eu consequat ac felis donec. Donec massa sapien faucibus et molestie ac feugiat sed. Fames ac turpis egestas sed tempus urna et pharetra pharetra.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar sapien. Tincidunt arcu non sodales neque sodales ut etiam. Quam lacus suspendisse faucibus interdum. Elementum nisi quis eleifend quam adipiscing vitae proin. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Posuere morbi leo urna molestie at elementum eu facilisis. In egestas erat imperdiet sed euismod nisi porta lorem. Cursus sit amet dictum sit amet. Ut faucibus pulvinar elementum integer enim neque. Porttitor massa id neque aliquam vestibulum morbi blandit. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Viverra vitae congue eu consequat ac felis donec. Donec massa sapien faucibus et molestie ac feugiat sed. Fames ac turpis egestas sed tempus urna et pharetra pharetra.</p>
        <Link href="/ahmad-list"><a className={styles.btn}>See Ahmad Listing</a></Link>
      </div>
    </Fragment>
  );
}
