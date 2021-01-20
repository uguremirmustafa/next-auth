/** @format */

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function myComponent() {
  const router = useRouter();
  const [session, loading] = useSession();
  const handleLogout = () => {
    signOut();
    router.push('/');
  };
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={handleLogout}>Sign out</button>
        </>
      )}
    </>
  );
}
