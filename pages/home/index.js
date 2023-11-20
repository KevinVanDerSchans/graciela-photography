import React from "react";
import Header from "../../src/components/Header";
import HomeSlider from "./SliderSection";
import Logo from "../../public/images/temporalLogo.jpg"

const Home = () => {

  return (
    <div className="index-two" data-menu="fixed">
      <Header
        headerLogo={Logo}
        headerLogoLight={Logo}
      />

      <main className="ms-main">
        <HomeSlider />
      </main>

    </div>
  );
};

export default Home;
