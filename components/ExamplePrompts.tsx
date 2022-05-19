import { Accordion } from '@mantine/core';
import Item from './Item';

type Props = {};

const ExamplePrompts = (props: Props) => {
  return (
    <Accordion sx={{ marginTop: '20px' }}>
      <Accordion.Item
        label='Some examples to get you started'
        sx={{
          border: '1px',
          borderColor: '#CED4D9',
          borderStyle: 'solid',
          borderRadius: '3px'
        }}
      >
        <Item
          prompt='List 5 exercises for a chest workout:'
          response={`1. Bench press 
2. Incline bench press 
3. Flyes 
4. Dips 
5. Push-ups`}
        />
        <Item
          prompt='Give some tips for going to the beach while raining:'
          response='Bring a raincoat and an umbrella. Bring a picnic lunch and drinks. Pack your beach towel, sunscreen, insect repellent, and hat.'
        />
      </Accordion.Item>
    </Accordion>
  );
};

export default ExamplePrompts;
