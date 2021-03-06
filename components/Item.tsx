import {  Card, Table, useMantineTheme, Text } from '@mantine/core';
import React from 'react';
import { StackItem } from '../pages';

type Props = StackItem;

const Item = ({ prompt, response }: Props) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card
      style={{ marginTop: 10 }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        '&:hover': {
          backgroundColor: theme.colors.gray[1]
        }
      })}
    >
      <Table style={{ color: secondaryColor, lineHeight: 1.5 }}>
        <tbody>
          <tr>
            <td width={200}>Prompt: </td>
            <td>{prompt}</td>
          </tr>
          <tr>
            <td>Response: </td>
            <td>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{response}</pre>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Item;
