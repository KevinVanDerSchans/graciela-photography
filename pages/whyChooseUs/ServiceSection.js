import React from 'react';
import Image from 'next/image';

import ServicesBackground from "public/images/collection/animals/6.jpg";
import PhotographyIcon from "../../public/images/icons/photographyIcon.svg";
import PhotoEditingIcon from "../../public/images/icons/photoEditingIcon.svg";
import AdviceIcon from "../../public/images/icons/adviceIcon.svg";

const ServiceSection = () => {
  return (
    <>
      <div className="services-area-2">
        <div className="container">
          <div className="services-area-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="left-side-content">
                  <h2 className="heading-title">¿Por qué eleginos?</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="right-side-content">
                  <h2 className="desc">Testimonios auténticos y una amplia gama de servicios especializados.</h2>
                </div>
              </div>
            </div>
            <div className="services-image">
              <Image src={ServicesBackground} alt="¿Por qué elegirnos?"/>
            </div>

            <div className="services-bottom">
              <h2 className="heading-title text-center">Nuestros servicios</h2>
              <div className="services-item">
                <div className="row">

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={PhotographyIcon} alt="Fotografía"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Fotografía</span>
                        </h3>
                        <p className="ms-sb--text">Su fotógrafa de confianza para momentos atemporales e imágenes de calidad. <br />La fiabilidad se une a la creatividad en cada toma que encuadramos.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={PhotoEditingIcon} alt="Edición de fotos"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Edición de fotos</span>
                        </h3>
                        <p className="ms-sb--text">Perfeccione y mejore sus fotografías. Eleva el impacto visual de tus fotos mediante retoques expertos, corrección del color y mejoras creativas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={AdviceIcon} alt="Asesoramiento fotográfico"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Asesoramiento fotográfico</span>
                        </h3>
                        <p className="ms-sb--text">Consejos profesionales para hacer fotos espectaculares. Mejora tu fotografía en aspectos como composición, iluminación y técnica.</p>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
