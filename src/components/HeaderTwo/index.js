import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MenuItems from '../Header/MenuItems';
import Logo from "../../../public/images/temporalLogo.jpg";
import LogoLight from "../../../public/images/temporalLogo.jpg";

const HeaderTwo = (props) => {
	const { headerClass, parentMenu, headerLogo, headerLogoLight } = props;

  const [modalOpen, setModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [offCanvasOpen, setOffCanvasOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    function handleResize() {
      const contentPart = document.querySelector('.ms-main');
      const footer = document.querySelector('.ms-footer');

      if ( contentPart && footer) {
        const footerHeight = footer.offsetHeight;
        contentPart.style.marginBottom = `${footerHeight}px`;
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <header>
        <div className={`${headerClass ? headerClass : 'main-header js-main-header auto-hide-header full-width menu-center header--sticky'} ${isVisible ? 'show-bg' : ''}`}>
          <div className={`main-header__layout ${isVisible ? 'action' : 'top'}`}>
            <div className="main-header__inner">
              <div className="main-header__logo">

                <div className="logo-dark">
                  <Link href="/">
                    <Image src={headerLogo ? headerLogo : LogoLight} alt="Graciela Logo" />
                  </Link>
                </div>

                <div className="logo-light">
                  <Link href="/">
                    <Image src={headerLogoLight ? headerLogoLight : Logo} alt="Graciela Logo" />
                  </Link>
                </div>
              </div>

              <nav className={`main-header__nav js-main-header__nav main-header__default ${menuOpen ? 'is_mobile main-header__nav--is-visible' : ''}`} id="main-header-nav" aria-labelledby="primary-menu">
                <ul id="primary-menu" className="navbar-nav">
                  <MenuItems />
                </ul>
              </nav>

            <div className="menuTrigger"></div>
              <div className="main-header--widgets">
                <div className="ms_theme_mode">
                  <div className="ms_tm--inner">
                    <div className="theme-toggle" id="theme-toggle" onClick={() => { setDarkMode(!darkMode); }} >
                      <input type="checkbox" id="switcher" className="check" defaultChecked={darkMode} aria-label='Toggle theme' />
                        <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                          <title>Change theme</title>
                        <mask className="moon" id="moon-mask">
                          <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                          <circle cx="24" cy="10" r="6" fill="black"></circle>
                        </mask>
                        <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
                        <g className="sun-beams" stroke="currentColor">
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            <button
              className="main-header__nav-trigger js-main-header__nav-trigger menu-default"
              aria-label="Toggle menu" aria-expanded={menuOpen ? 'true' : 'false'}
              aria-controls="main-header-nav"
              onClick={() => {setMenuOpen(!menuOpen)}}
            >
              <span>Menu</span>
              <i className="main-header__nav-trigger-icon" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  </>
  )
}

export default HeaderTwo;
