
import React, { useEffect } from 'react';
import $ from "jquery";
import "justifiedGallery";

import Link from 'next/link';
import Image from 'next/image';

import Header from "../../../src/components/Header";
import Footer from '../../../src/components/Footer';

import one from "../../../public/images/collection/personalSessions/1.jpg";
import two from "../../../public/images/collection/personalSessions/2.jpg";
import three from "../../../public/images/collection/personalSessions/3.jpg";
import four from "../../../public/images/collection/personalSessions/4.jpg";
import five from "../../../public/images/collection/personalSessions/5.jpg";
import six from "../../../public/images/collection/personalSessions/6.jpg";


function PersonalSessions() {

  useEffect(() => {
    $(document).ready(function () {
      $('#colorboxExample').justifiedGallery({
        lastRow: 'nojustify',
        rowHeight: 100,
        rel: 'gallery1', // reemplaza con 'gallery1' el atributo rel de cada enlace
        margins: 1
      });
    }).on('jg.complete', function () {
      $(this).find('a').colorbox({
        maxWidth: '80%',
        maxHeight: '80%',
        opacity: 0.8,
        transition: 'elastic',
        current: ''
      });
    });
  }, []);


  return (
    <div className="masonry">
      <Header />

      <main className="ms-main single">
        <div className="ms-page-content">
          <div className="project-single-banner">
            <div className="container">
              <div className="project-single-inner">
                <div className="row top">

                  <div className="col-lg-6">
                    <h1 className="heading-title">Personal Sessions</h1>
                  </div>

                  <div className="col-lg-6">
                    <p className="desc">Each session is a personalized experience that highlights the beauty and authenticity of our clients.</p>
                  </div>
                </div>
                <div className="row bottom">
                  <div className="col-lg-6">
                    <div className="author-area">

                      <div className="client">
                        <p className="tag"></p>
                        <h4 className="platform"></h4>
                      </div>

                      <div className="partner">
                        <p className="tag"></p>
                        <h4 className="platform"></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="catagory"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="ms-hero project personal-sessions">
            <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll"></div>
          </section>


          <section className="project-single-wrap">

            <div className="team-area one two gallery gallery1">
              <div className="container">
                <div className="ms-content--portfolio" id="237a777">
                  <div className="row grid grid-content blockgallery">
                    <div className="grid-sizer col-xs-12 col-lg-4 col-md-3"></div>



                    <div id="basicExample">
                      <a href="path/to/image1.jpg">
                          <img alt="caption for image 1" src="/images/collection/personalSessions/4.jpg"/>
                      </a>
                      <a href="path/to/image2.jpg">
                          <img alt="caption for image 2" src="/images/collection/personalSessions/4.jpg"/>
                      </a>

                    </div>



                      <div id="my-gallery" className="grid-item col-6 col-lg-4 col-md-4 one">
                        <a className="mfp-img" href="public/images/collection/animals.jpg" data-lightbox="animals.jpg" data-title="My caption" title="">
                          <figure className="media-wrapper one media-wrapper--4:3">
                            <Image decoding="async" src={one} alt="full-shot-travel-concept-with-landmarks" />
                          </figure>
                        </a>
                      </div>

                      <div className="grid-item col-6 col-lg-4 col-md-4">
                        <a className="mfp-img" href="#0">
                          <figure className="media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={two} alt="dee-copper-and-wild-XJBC_7VY37k-unsplash" />
                          </figure>
                        </a>
                      </div>

                      <div className="grid-item col-6 col-lg-4 col-md-4">
                        <a className="mfp-img" href="#0" title="">
                          <figure className="media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={three} alt="charming-relaxed-gentle-young-woman" />
                          </figure>
                        </a>
                      </div>

                      <div className="grid-item col-6 col-lg-4 col-md-4">
                        <a className="mfp-img" href="#0">
                          <figure className="media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={four} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                          </figure>
                        </a>
                      </div>

                      <div className="grid-item col-6 col-lg-4 col-md-4 one">
                        <a className="mfp-img" href="#0" title="">
                          <figure className="media-wrapper one media-wrapper--4:3">
                            <Image decoding="async" src={five} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                          </figure>
                        </a>
                      </div>

                      <div className="grid-item col-6 col-lg-4 col-md-4">
                        <a className="mfp-img" href="#0" title="">
                          <figure className="media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={six} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                          </figure>
                        </a>
                      </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="ms-spn--wrap container">
                <div className="ms-spn--content row">
                    <div className="ms-spn--text col-md-6">

                        <Link className="ms-spn--link" href="/works/fitness">
                            <div className="ms-spn--head">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"></path>
                                    </g>
                                </svg>
                                <h3>Next Project</h3>
                            </div>
                            <h1>Fitness</h1>
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <Link href="/works/fitness" className="ms-spn--thumb">
                            <Image src="/images/collection/fitness.jpg" alt="" width={800} height={600} />
                        </Link>
                    </div>
                </div>
            </div>
          </section>
        </div>


      </main>

      <Footer />
    </div>
  );
};

export default PersonalSessions;
