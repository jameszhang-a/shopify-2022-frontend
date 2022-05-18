import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button, Textarea } from '@mantine/core';
import { StackItem } from '../../pages';
import Loading from './Loading';

type Props = {
  stack: StackItem[];
  setStack(items: StackItem[]): void;
};

const Magic = ({ stack, setStack }: Props) => {
  const [ prompt, setPrompt ] = useState('');
  const [ disableSubmit, setDisableSubmit ] = useState(true);
  const [ loading, setLoading ] = useState(false);

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

  const openAI = async (): Promise<string> => {
    setLoading(true);
    const data = {
      prompt,
      temperature: 0.6,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 1,
      presence_penalty: 1
    };

    const payload = await (await fetch(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify(data)
      }
    )).json();
    console.log(payload);
    setLoading(false);
    return payload.choices[0].text;
  };

  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget.value;
    setPrompt(input);

    // Only shows the get response button if there is input in the text area
    setDisableSubmit(input === '');
  };

  const handleSubmit = async () => {
    const res = await openAI();
    console.log(res);

    const newStack: StackItem[] = [ { prompt, response: res }, ...stack ];
    setStack(newStack);
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
        sx={{ marginBottom: '10px', marginTop: '20px' }}
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
      {loading && <Loading />}
    </div>
  );
};

export default Magic;
