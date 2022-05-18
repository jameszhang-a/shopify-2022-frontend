import { LoadingOverlay } from '@mantine/core';
import Item from './Item';

const Loading = () => {
  return (
    <div style={{ position: 'relative' }}>
      <LoadingOverlay visible />
      <Item prompt={''} response={''} />
    </div>
  );
};

export default Loading;
