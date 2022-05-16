import React from 'react';
import { StackItem } from '../../pages';

type Props = {
  stack: StackItem[];
};

const History = ({ stack }: Props) => {
  return (
    <div>
      {stack.map((ele, id) => {
        return (
          <div key={id}>
            <p>{ele.prompt}</p>
            <p>{ele.response}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
