import React from 'react';
import { StackItem } from '../pages';
import Item from './Item';

type Props = {
  stack: StackItem[];
};

const History = ({ stack }: Props) => {
  return (
    <div>
      {stack.map((ele, id) => {
        console.log(ele.response);

        return <Item key={id} prompt={ele.prompt} response={ele.response} />;
      })}
    </div>
  );
};

export default History;
