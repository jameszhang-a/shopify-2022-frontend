import { StackItem } from '../../pages';
import Item from './Item';

type Props = {
  stack: StackItem[];
};

const History = ({ stack }: Props) => {
  return (
    <div>
      {stack.map((ele, id) => {
        return <Item key={id} prompt={ele.prompt} response={ele.response} />;
      })}
    </div>
  );
};

export default History;
