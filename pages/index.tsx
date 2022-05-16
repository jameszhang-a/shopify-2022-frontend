// import type { NextPage } from 'next'
import { Center, Container } from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';
import History from '../lib/components/History';
import Magic from '../lib/components/Magic';
import StackItem from '../lib/components/StackItem';
import styles from '../styles/Home.module.css';

export type StackItem = {
  prompt: String;
  response: String;
};

const Home: NextPage = () => {
  const [ responseStack, setResponseStack ] = useState([]);
  return (
    <Container style={{ height: '100vh' }}>
      <Magic stack={responseStack} setStack={setResponseStack} />
      <History stack={responseStack} />
      <StackItem prompt={'aaa'} response={'AAA'} />
    </Container>
  );
};

export default Home;
