import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Logo from "../../public/images/temporalLogo.jpg";

import ServiceSection from "./ServiceSection";
import TestimonialsSection from "./TestimonialsSections";
import WorksSection from "./WorksSection";

const WhyChooseUs = () => {
  return (

    <div>
      <Header
        headerLogo={Logo}
      />

      <main className="ms-main home-six">
        <div className="ms-page-content">
          <ServiceSection />
          <TestimonialsSection />
          <WorksSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WhyChooseUs;
