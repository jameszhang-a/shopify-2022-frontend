import { NextPage } from 'next';
import { useState } from 'react';
import { Container, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import History from '../components/History';
import Magic from '../components/Magic';
import StackItem from '../components/Item';
import ExamplePrompts from '../components/ExamplePrompts';

export type StackItem = {
  prompt: String;
  response: String;
};

const Home: NextPage = () => {
  const [ responseStack, setResponseStack ] = useLocalStorage<StackItem[]>({
    key: 'responses',
    defaultValue: []
  });

  return (
    <Container style={{ height: '100vh' }}>
      <Title order={1}>Ask the AI anything!</Title>
      <ExamplePrompts />
      <Magic stack={responseStack} setStack={setResponseStack} />
      <History stack={responseStack} />
    </Container>
  );
};

export default Home;
