import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import Magic from '../components/Magic';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  // list of inputs to be displayed in the component
  const [ inputs, setInputs ] = useState([
    false,
    [ 'item 1', 'item 2', 'item 3' ],
    {
      name: 'James Zhang',
      school: 'University of Wisconsin-Madison',
      grade: 'Junior',
      GitHub: 'github.com/jameszhang-a',
      LinkedIn: 'linkedin.com/in/jameszhanga'
    }
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>James Zhang</title>
        <meta name='description' content='Ramp front end application' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>James Zhang</h1>
        {inputs.map((input, idx) => <Magic key={idx} input={input} />)}
      </main>
    </div>
  );
};

export default Home;
