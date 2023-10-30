import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import MenuItems from "./MenuItems";
import Logo from "../../../public/images/logo/temporalLogo.jpg";
import LogoLight from "../../../public/images/logo/temporalLogo.jpg";

const Header = (props) => {

  const { headerClass, parentMenu, headerLogo, headerLogoLight } = props;

  const [modalOpen, setModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageXOffset > 100) {
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

      if (contentPart && footer) {
        const footerHeight = footer.offsetHeight;
        contentPart.style.marginBottom = `${footerHeight}px`;
      }
    };

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
          <div className={`main-header__layout  ${isVisible ? 'action' : 'top'}`}>
            <div className="main-header__inner">
              <div className="main-header__logo">

              <div className="logo-dark">
                <Link href="/">
                  <Image src={headerLogo ? headerLogo : Logo} alt="Logo dark theme" />
                </Link>
              </div>
              {/*
              <div className="logo-light">
                <Link href="/">
                  <Image src={headerLogoLight ? headerLogoLight : headerLogoLight} alt="Logo light theme" />
                </Link>
              </div>
              */}
              </div>

              <nav className={`main-header__nav js-main-header__nav main-header__default ${menuOpen ? 'is_mobile main-header__nav--is-visible' : ''}`} id="main-header-nav" aria-labelledby="primary-menu">
                <ul id="primary-menu" className="navbar-nav">
                  <MenuItems />
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
