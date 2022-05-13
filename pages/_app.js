import '../styles/globals.css';
import React from 'react';
import { Layout } from '../components';
import { StateContext } from '../context/StateContex';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </StateContext>
  );
}
