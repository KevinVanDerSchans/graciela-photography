import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WorksSection from '../whyChooseUs/WorksSection';

import gracielaCVImage from "public/images/collection/exterior/8.jpg";
import PhotographyIcon from "../../public/images/icons/photographyIcon.svg";
import PhotoEditingIcon from "../../public/images/icons/photoEditingIcon.svg";
import AdviceIcon from "../../public/images/icons/adviceIcon.svg";

const CV = () => {
  return (
    <div className="container">
      <div className="personal-cv-area">
        <div className="row">
          <div className="col-lg-5">
            <div className="image-left-side">
              <Image src={gracielaCVImage} alt="Experiencia de Graciela" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="right-side-content">
              <h1 className="heading-title">Sobre mi</h1>
              <p>
                <em>
                  <span className="cate-color">Argentina de nacimiento y española de corazón &nbsp;</span> &nbsp;
                </em>
              </p>
              <p className="desc">
              Siempre he sentido un profundo amor por la fotografía. A los 10 años, mis padres me regalaron mi primera cámara y, desde entonces, no he parado de capturar los momentos más bonitos de mi vida.
              <br />
              <br />
              Ahora, con <strong>10 años de experiencia</strong> y especializada en fotografía infantil, este trabajo me permite transmitir todos los sentimientos y emociones que me rodean, compartiéndolos con aquellos que forman parte de mi vida.
              </p>

              <p>
                Defino mi estilo como <strong>romántico</strong>, <strong>suave</strong>, <strong>cercano</strong> y <strong>familiar</strong>.
              </p>

              <p className="desc">
                Más allá de la fotografía, mi alegría proviene de mis 3 hijas y mi manada de perros.
                Entre mis aficiones, me encanta aprender a bailar y probar restaurantes y tartas en Málaga.
              </p>

              <div className="services-area">
                <h2 className="services-title">Mis servicios</h2>
                <div className="services-items">
                  <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={PhotographyIcon} className="attachment-full size-full" alt="Photografía" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Fotografía</span>
                          </h4>
                          <p className="ms-sb--text">
                            Su fotógrafa de confianza para momentos atemporales e imágenes de calidad. La fiabilidad se une a la creatividad en cada toma que encuadramos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={PhotoEditingIcon} className="attachment-full size-full" alt="Edición de fotos" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Edición de fotos</span>
                          </h4>
                          <p className="ms-sb--text">
                            Perfeccione y mejore sus fotografías. Eleva el impacto visual de tus fotos mediante retoques expertos, corrección del color y mejoras creativas.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={AdviceIcon} className="attachment-full size-full" alt="Asesoramiento fotográfico" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Asesoramiento fotográfico</span>
                          </h4>
                          <p className="ms-sb--text">
                            Consejos profesionales para hacer fotos espectaculares. Mejora tu fotografía en aspectos como composición, iluminación y técnica.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorksSection />
    </div>
  );
}

export default CV;
