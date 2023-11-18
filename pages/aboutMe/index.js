import React from 'react';
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Logo from "../../public/images/temporalLogo.jpg";

import BannerSection from './BannerSection';
import CV from "./CV";

const AboutMe = () => {
  return (
    <>
      <Header
        headerLogo={Logo}
      />

      <main className="ms-main">
        <div className="ms-page-content">

          <BannerSection />
          <CV />

        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutMe;
