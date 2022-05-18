import { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { Center, Container } from '@mantine/core';

import History from '../lib/components/History';
import Magic from '../lib/components/Magic';
import StackItem from '../lib/components/Item';

export type StackItem = {
  prompt: String;
  response: String;
};

const Home: NextPage = () => {
  const [ responseStack, setResponseStack ] = useState<StackItem[]>([]);
  return (
    <Container style={{ height: '100vh' }}>
      <Magic stack={responseStack} setStack={setResponseStack} />
      <History stack={responseStack} />
    </Container>
  );
};

export default Home;
