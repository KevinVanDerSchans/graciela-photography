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

                <Image src={homeTemporalImage} alt="Home" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">

                      <p className="tag">Dare to show your</p>
                      <Link
                        href="/"
                        className="title">
                          STORY
                      </Link>
                    </div>

                    <p className="disc">
                       Do you want to feel special and capture your true <span> </span>
                      <br />
                       essence in some photos?<span> </span>
                      <br />
                       Let me immortalize your most authentic moments!
                    </p>
                </div>
              </div>
            </SwiperSlide>

            { /* Works */}
            <SwiperSlide className="swiper-slide">
              <div className="slider-inner" data-swiper-parallax="100">

                <Image src={worksTemporalImage} alt="Works" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">DISCOVER MY</p>
                      <Link
                        href="/works"
                        className="title">
                          WORKS
                      </Link>
                    </div>
                    <p className="disc">
                      Discover the world through my lens.<span> </span>
                      <br />
                      Take a look at my collections and be captivated<span> </span>
                      <br />
                      by the beauty captured in each image!
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
                            See my works
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

                <Image src={aboutMeTemporalImage} alt="About Me" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">Find out more</p>
                      <Link
                        href="/aboutMe"
                        className="title"
                      >
                        ABOUT ME
                      </Link>
                    </div>
                    <p className="disc">
                      Discover my career, my inspiration and<span> </span>
                      <br />
                      how my passion for photography is<span> </span>
                      <br />
                      reflected in every image I capture.
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
                            <div className="ms-btn__text">Read About Me</div>
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

                <Image src={whyChooseUsTemporalImage} alt="Why choose us?" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <p className="tag">Why</p>
                      <Link
                        href="/whyChooseUs"
                        className="title"
                      >
                        CHOOSE US?
                      </Link>
                    </div>
                    <p className="disc">
                      Authentic testimonials, collaborations with <span> </span>
                      <br />
                      Malaga brands and a wide range of specialized services.<span> </span>
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
                            <div className="ms-btn__text">Help yourself to decide!</div>
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
                      <p className="tag">Do you have any questions?</p>
                      <Link
                        href="/faq"
                        className="title"
                      >
                        FAQ
                      </Link>
                    </div>
                    <p className="disc">
                      If you have questions about my<span> </span>
                      <br />
                      photography services, I am here to help!<span> </span>
                      <br />
                      Tell me what you are worried about.
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
                            <div className="ms-btn__text">Clear your doubts!</div>
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

                <Image src={contactTemporalImage} alt="Contact" />
                  <div className="swiper-content" data-swiper-parallax="2000">
                    <div className="title-area">
                      <Link
                        href="/contact"
                        className="title"
                      >
                        Contact
                      </Link>
                    </div>
                    <p className="disc">
                      Ready to capture your special moments?<span> </span>
                      <br />
                      I am here to answer your questions, discuss your ideas<span> </span>
                      <br />
                      and design the perfect photo shoot together!
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
                            <div className="ms-btn__text">Send me a message!</div>
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
