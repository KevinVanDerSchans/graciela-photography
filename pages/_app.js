import { useRouter } from 'next/router';
import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';

import Home from '../pages/home';
import Contact from '../pages/contact';

import Works from '../pages/works'
import PersonalSessions from '../pages/worksDetails/PersonalSessions';
import Fitness from "../pages/worksDetails/Fitness";
import Animals from "../pages/worksDetails/Animals";
import PreWeddings from "../pages/worksDetails/PreWeddings";
import Weddings from "../pages/worksDetails/Weddings";
import Pregnant from "../pages/worksDetails/Pregnant";
import Babies from "../pages/worksDetails/Babies";
import Exterior from "../pages/worksDetails/Exterior";


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

  } else if (router.asPath === '/works/personal-sessions') {
    return <PersonalSessions />

  } else if (router.asPath === '/works/fitness') {
    return <Fitness />

  } else if (router.asPath === '/works/animals') {
    return <Animals />

  } else if (router.asPath === '/works/pre-weddings') {
    return <PreWeddings />

  } else if (router.asPath === '/works/weddings') {
    return <Weddings />

  } else if (router.asPath === '/works/pregnant') {
    return <Pregnant />

  } else if (router.asPath === '/works/babies') {
    return <Babies />

  } else if (router.asPath === '/works/exterior') {
    return <Exterior />

  } else if (router.pathname === '/contact') {
    return <Contact />;
  }

  return <div>{children}</div>
};

export default Layout;
