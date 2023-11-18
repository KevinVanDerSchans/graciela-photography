import React from "react";
import HeaderTwo from "../../src/components/HeaderTwo";
import Logo from "../../public/images/temporalLogo.jpg";
import Collection from "./Collection";
import Footer from "../../src/components/Footer";

const Works = () => {
  return (
    <div className="projects1">
      <HeaderTwo
        headerLogo={Logo}
      />

      <div className="breadcrumb-area breadcrumbs-2 breadcrumb-bg bg_image">
        <div className="container">
            <div className="row align-items-end banner">
                <div className="col-lg-8 breadcrumb-1">
                    <h2 className="heading-title">EXPLORE MY <br/> COLLECTION</h2>
                </div>
                <div className="col-lg-4">
                    <p className="desc"></p>
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
