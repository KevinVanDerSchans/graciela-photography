import React from "react";

import Header from "../../src/components/Header";
import Collection from "./Collection";
import Footer from "../../src/components/Footer";

import Logo from "../../public/images/temporalLogo.jpg";


const Works = () => {

  return (
    <div className="projects1">
      <Header
        headerLogo={Logo}
      />

      <div class="breadcrumb-area breadcrumbs-2 breadcrumb-bg bg_image">
        <div class="container">
            <div class="row align-items-end banner">
                <div class="col-lg-8 breadcrumb-1">
                    <h2 class="heading-title">EXPLORE MY <br/> COLLECTION</h2>
                </div>
                <div class="col-lg-4">
                    <p class="desc"></p>
                </div>
            </div>
        </div>
      </div>

      <main className="ms-main">
        <Collection />
      </main>

      <Footer />
    </div>
  )
};

export default Works;
