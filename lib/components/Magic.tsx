import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button, Textarea } from '@mantine/core';
import { StackItem } from './History';

type Props = {
  stack: String[];
  setStack(item: StackItem): void;
};

const Magic = ({ stack, setStack }: Props) => {
  const [ prompt, setPrompt ] = useState('');
  const [ disableSubmit, setDisableSubmit ] = useState(true);

  const rand = (): StackItem => {
    const choice = [
      { prompt: 'aaa', response: 'AAA' },
      { prompt: 'bbb', response: 'BBB' },
      { prompt: 'ccc', response: 'CCC' },
      { prompt: 'ddd', response: 'DDD' },
      { prompt: 'eee', response: 'EEE' },
      { prompt: 'fff', response: 'FFF' }
    ];
    const randomElement: StackItem = choice[Math.floor(Math.random() * choice.length)];

    return randomElement;
  };

  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget.value;
    setPrompt(input);

    // Only shows the get response button if there is input in the text area
    setDisableSubmit(input === '');
  };

  const handleSubmit = () => {
    setStack([ ...stack, rand() ]);
  };

  return (
    <div>
      <Textarea
        label='Prompt'
        placeholder='Enter your prompt'
        value={prompt}
        onChange={inputChange}
        autosize
        minRows={10}
      />
      <Button
        color='grape'
        radius='md'
        size='md'
        onClick={handleSubmit}
        disabled={disableSubmit}
      >
        Get Response!
      </Button>
    </div>
  );
};

export default Magic;
