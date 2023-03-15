import { Inter } from 'next/font/google';
import { getSession, useSession } from 'next-auth/react';
import { NextPage, NextPageContext } from 'next';
import { Auth, Chat } from '@/components';
import { Box } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log(session);

  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };

  return (
    <Box>
      {session && session?.user?.username ? (
        <Chat />
      ) : (
        <Auth session={session} reloadSession={reloadSession} />
      )}
    </Box>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}

export default Home;
