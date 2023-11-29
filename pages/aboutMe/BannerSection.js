import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import GracielaImage from "../../public/images/gracielaImage.jpg"

const BannerSection = () => {
  return (
    <>
      <div className="ms-page-content portfolio-banner">
        <div className="container">
          <div className="portfolio-banner-inner">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="banner-content">
                  <h2 className="heading-title">¡Hola! Soy</h2>
                  <h2 className="sub-title">Graciela Delafuente</h2>
                  <h2 className="title">Fotógrafa </h2>
                  <p className="desc">
                    Me apasiona inmortalizar momentos auténticos y captar la esencia única de cada persona y ocasión.
                  </p>

                  <div className="ms-social-icon">
                    <div className="ms-s-w">
                      <a className="ms-s-i mono s-it" href="https://www.instagram.com/graciela_delafuentee" target="_blank">
                        <i className="socicon-instagram"><span>Instagram</span></i>
                      </a>

                      <a className="ms-s-i mono s-it" href="https://www.facebook.com/graciela.delafuente2" target="_blank">
                        <i className="socicon-facebook"><span>Facebook</span></i>
                      </a>

                      <a className="ms-s-i mono s-it" href="https://wa.me/666394150" target="_blank">
                        <i className="socicon-whatsapp"><span>Whatsapp</span></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="banner-hero">
                  <Image src={GracielaImage} alt="Graciela Delafuente" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
