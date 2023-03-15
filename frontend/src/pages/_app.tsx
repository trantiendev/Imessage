import { ChakraBaseProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../chakra/theme';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/graphql/apollo-client';
import { Toaster } from 'react-hot-toast';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
          <Toaster />
        </ChakraBaseProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
