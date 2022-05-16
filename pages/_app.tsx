import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import React from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Zhang 2022 Fall Shopify Challenge</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta name='description' content='Shopify front end application' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light'
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </React.Fragment>
  );
}
