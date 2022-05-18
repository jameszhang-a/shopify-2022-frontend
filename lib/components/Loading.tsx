import { LoadingOverlay } from '@mantine/core';
import React from 'react';
import Item from './Item';

const Loading = () => {
  return (
    <div style={{ position: 'relative' }}>
      <LoadingOverlay visible />
      <Item prompt={''} response={''} />
      {/* ...other content */}
    </div>
  );
};

export default Loading;
