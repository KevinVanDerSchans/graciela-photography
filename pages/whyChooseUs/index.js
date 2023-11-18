import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Logo from "../../public/images/temporalLogo.jpg";

import ServiceSection from "./ServiceSection";

const WhyChooseUs = () => {
  return (

    <div>
      <Header
        headerLogo={Logo}
      />

      <main className="ms-main">
        <div className="ms-page-content">
          <ServiceSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WhyChooseUs;
