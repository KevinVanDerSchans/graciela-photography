import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';

SwiperCore.use([Mousewheel]);

import homeTemporalImage from "../../public/images/slider/homeTemporalImage.jpg";
import worksTemporalImage from "../../public/images/slider/worksTemporalImage.jpg";
import whyChooseUsTemporalImage from "../../public/images/slider/whyChooseUsTemporalImage.jpg";
import faqTemporalImage from "../../public/images/slider/faqTemporalImage.jpg";
import aboutMeTemporalImage from "../../public/images/slider/aboutMeTemporalImage.jpg";
import contactTemporalImage from "../../public/images/slider/contactTemporalImage.jpg";

const sliderOption = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  spaceBetween: 0,
  slidesPerView: '1',
  parallax: true,
  speed: 700,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  }
};

const HomeSlider = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current, sliderOption;
    }
  }, []);

  return (
    <div className="banner-horizental">
      <div className="swiper swiper-container-h">
          <Swiper {...sliderOption} mousewheel={true} ref={swiperRef} watchSlidesProgress className="swiper-wrapper">

            { /* Home */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={homeTemporalImage} alt="Inicio" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">

                      <p className="tag">Atrévete a enseñar tu</p>
                      <Link
                        href="/"
                        className="title">
                          HISTORIA
                      </Link>
                    </div>

                    <p className="disc">
                       ¿Quieres sentirte especial y capturar <span> </span>
                      <br />
                       tu verdadera esencia en tus fotos?<span> </span>
                      <br />
                       ¡Déjame inmortalizar tus momentos más auténticos!
                    </p>
                </div>
              </div>
            </SwiperSlide>

            { /* Works */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={worksTemporalImage} alt="Sesiones" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">Descubre mis</p>
                      <Link
                        href="/works"
                        className="title">
                          SESIONES
                      </Link>
                    </div>
                    <p className="disc">
                      Descubre el mundo a través de mi lente.<span> </span>
                      <br />
                      Echa un vistazo a mis colecciones y cautívate<span> </span>
                      <br />
                      por la belleza capturada en cada imagen!
                    </p>

                    <div className="btn-wrap">
                      <Link
                        href="/works"
                        className="btn btn-circle btn--md"
                        aria-label="button"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill"></div>
                              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                <circle cx="25" cy="25" r="23"></circle>
                              </svg>

                            <div className="circle-icon">
                              <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="ms-btn--label">
                          <div className="ms-btn__text">
                            Ver mis sesiones
                            </div>
                          <div className="ms-btn__border"></div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            { /* About Me */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={aboutMeTemporalImage} alt="Sobre mi" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">Descubre más</p>
                      <Link
                        href="/aboutMe"
                        className="title"
                      >
                        SOBRE MI
                      </Link>
                    </div>
                    <p className="disc">
                      Descubre mi carrera, mi inspiración y<span> </span>
                      <br />
                      cómo mi pasión por la fotografía es<span> </span>
                      <br />
                      reflejada en cada imagen que capturo.
                    </p>

                    <div className="btn-wrap">
                    <Link
                        href="/aboutMe"
                        className="btn btn-circle btn--md"
                        aria-label="button"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill"></div>
                              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                <circle cx="25" cy="25" r="23"></circle>
                              </svg>

                            <div className="circle-icon">
                              <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="ms-btn--label">
                            <div className="ms-btn__text">Leer Sobre mi</div>
                            <div className="ms-btn__border"></div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            { /* Why choose us? */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={whyChooseUsTemporalImage} alt="¿Por qué elegirnos?" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">¿Por qué</p>
                      <Link
                        href="/whyChooseUs"
                        className="title"
                      >
                       ELEGIRNOS?
                      </Link>
                    </div>
                    <p className="disc">
                      Testimonios auténticos y una amplia<span> </span>
                      <br />
                      gama de servicios especializados.<span> </span>
                    </p>

                    <div className="btn-wrap">
                      <Link
                        href="/whyChooseUs"
                        className="btn btn-circle btn--md"
                        aria-label="button"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill"></div>
                              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                <circle cx="25" cy="25" r="23"></circle>
                              </svg>

                            <div className="circle-icon">
                              <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="ms-btn--label">
                          <div className="ms-btn__text">Investiga la sección</div>
                          <div className="ms-btn__border"></div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            { /* FAQ */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={faqTemporalImage} alt="FAQ" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">¿Tienes alguna pregunta?</p>
                      <Link
                        href="/faq"
                        className="title"
                      >
                        FAQ
                      </Link>
                    </div>
                    <p className="disc">
                      Si tienes dudas sobre mis servicios de <span> </span>
                      <br />
                      fotografía, ¡estoy aquí para ayudarte!<span> </span>
                    </p>

                    <div className="btn-wrap">
                      <Link
                        href="/faq"
                        className="btn btn-circle btn--md"
                        aria-label="button"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill"></div>
                              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                <circle cx="25" cy="25" r="23"></circle>
                              </svg>

                            <div className="circle-icon">
                              <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="ms-btn--label">
                            <div className="ms-btn__text">¡ Aclara tus dudas! </div>
                            <div className="ms-btn__border"></div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            { /* Contact */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={contactTemporalImage} alt="Contacto" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <Link
                        href="/contact"
                        className="title"
                      >
                        Contacto
                      </Link>
                    </div>
                    <p className="disc">
                      ¿Preparado para capturar tus momentos especiales?<span> </span>
                      <br />
                      ¡ Estoy aquí para responder tus preguntas, desarrollar <span> </span>
                      <br />
                      tus ideas y diseñar la sesión de fotografía perfecta juntos !
                    </p>

                    <div className="btn-wrap">
                    <Link
                        href="/contact"
                        className="btn btn-circle btn--md"
                        aria-label="button"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill"></div>
                              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                <circle cx="25" cy="25" r="23"></circle>
                              </svg>

                            <div className="circle-icon">
                              <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="ms-btn--label">
                            <div className="ms-btn__text">¡ Envíame un mensaje !</div>
                            <div className="ms-btn__border"></div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-wrapper">
            <div className="swiper-button-next" tabIndex="0" aria-label="Next slide">
            </div>
            <div className="swiper-button-prev" tabIndex="0" aria-label="Previous slide">
            </div>
          </div>

          <div className="slider-pagination-area">
            <h5 className="slide-range one">01</h5>
            <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span className="swiper-pagination-progressbar-fill"></span></div>
            <h5 className="slide-range three">06</h5>
          </div>
        </div>
    </div>
  );
};

export default HomeSlider;
