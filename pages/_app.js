import { useRouter } from 'next/router';
import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';

import Home from '../pages/home';
import Contact from '../pages/contact';



import Works from '../pages/works/index'
import WorksDetails from '../pages/works/[slug]';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/parallax';

import "../src/scss/style.scss";


SwiperCore.use([Navigation, Pagination, Parallax]);


function Layout ({ children }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Home />;

  } else if (router.pathname === '/works') {
    return <Works />;

  } else if (router.pathname.startsWith("/work/")) {
    return <WorksDetails />;

  } else if (router.pathname === '/contact') {
    return <Contact />;
  }

  return <div>{children}</div>
};

export default Layout;
