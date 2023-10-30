import React from 'react';
import { useRouter } from 'next/router';

function Layout ({ children }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <h1>HELLO</h1>;
  }

  return <div>{children}</div>
};

export default Layout;
