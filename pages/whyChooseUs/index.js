import React from "react";
import HeaderTwo from "../../src/components/HeaderTwo";
import Logo from "../../public/images/temporalLogo.jpg";
import Footer from "../../src/components/Footer";

import ServiceSection from "./ServiceSection";
import TestimonialsSection from "./TestimonialsSections";
import WorksSection from "./WorksSection";

const WhyChooseUs = () => {
  return (

    <div>
      <HeaderTwo
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
