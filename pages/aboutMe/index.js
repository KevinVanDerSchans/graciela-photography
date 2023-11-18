import React from 'react';
import HeaderTwo from "../../src/components/HeaderTwo";
import Logo from "../../public/images/temporalLogo.jpg";
import Footer from "../../src/components/Footer";

import BannerSection from './BannerSection';
import CV from "./CV";

const AboutMe = () => {
  return (
    <>
      <HeaderTwo
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
