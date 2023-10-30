import { useRouter } from 'next/router';

import Home from './home';

function Layout ({ children }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Home />;

  } else if (router.pathname === "/test") {
    return <h2>test</h2>

  }

  return <div>{children}</div>
};

export default Layout;
