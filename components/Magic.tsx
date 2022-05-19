import { useState } from 'react';
import { Button, Group, Textarea } from '@mantine/core';
import { StackItem } from '../pages';
import Loading from './Loading';

type Props = {
  stack: StackItem[];
  setStack(items: StackItem[]): void;
};

const Magic = ({ stack, setStack }: Props) => {
  const [ prompt, setPrompt ] = useState('');
  const [ disableSubmit, setDisableSubmit ] = useState(true);
  const [ loading, setLoading ] = useState(false);

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

    // gets rid of the loading component
    setLoading(false);
    return payload.choices[0].text.trimStart();
  };

  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget.value;
    setPrompt(input);

    // Only shows the get response button if there is input in the text area
    setDisableSubmit(input === '');
  };

  const handleSubmit = async () => {
    const res = await openAI();
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
      <Group spacing='xl'>
        <Button
          color='grape'
          radius='md'
          size='md'
          onClick={handleSubmit}
          disabled={disableSubmit}
        >
          Get Response!
        </Button>
        {stack.length > 0 && (
          <Button color='red' radius='md' size='md' onClick={() => setStack([])}>
            Clear History
          </Button>
        )}
      </Group>
      {loading && <Loading />}
    </div>
  );
};

export default Magic;
