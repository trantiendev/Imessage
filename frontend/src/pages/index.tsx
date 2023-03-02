import { Inter } from 'next/font/google';
import { signIn, signOut, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useSession();

  console.log(data);

  return (
    <>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign in</button>
      )}
      {data?.user?.name}
    </>
  );
}
