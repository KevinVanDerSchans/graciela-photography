import { useRouter } from 'next/router';

function Layout ({ children }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <h1>HELLO</h1>;

  } else if (router.pathname === "/test") {
    return <h2>test</h2>

  }

  return <div>{children}</div>
};

export default Layout;
