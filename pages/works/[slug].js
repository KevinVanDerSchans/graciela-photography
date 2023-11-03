import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import works from "../../src/data/Works.json";

import homeTemporalImage from "../../public/images/slider/homeTemporalImage.jpg";
import worksTemporalImage from "../../public/images/slider/worksTemporalImage.jpg";
import myServicesTemporalImage from "../../public/images/slider/myServicesTemporalImage.jpg";
import faqTemporalImage from "../../public/images/slider/faqTemporalImage.jpg";
import aboutMeTemporalImage from "../../public/images/slider/aboutMeTemporalImage.jpg";
import contactTemporalImage from "../../public/images/slider/contactTemporalImage.jpg";


function WorksDetails() {

  const router = useRouter();
    var slug = router.query.slug;

    if (slug === undefined) {
      slug = "work1";
    }

    const work = works.find(item => item.slug === slug);
    var nextWork = works.find(item => item.id - 1 === works.id);

    if (nextWork === undefined) {
      nextWork = works.find(item => item.id === 1);
    }
    console.log(nextWork);


    return (
      <div className="masonry">
      <Header />

      <main className="ms-main single">
          <div className="ms-page-content">
              <div className="work-single-banner">
                  <div className="container">
                      <div className="work-single-inner">
                          <div className="row top">
                              <div className="col-lg-6">
                                  <h1 className="heading-title">{work.title}</h1>
                              </div>
                              <div className="col-lg-6">
                                  <p className="desc">{work.description}</p>
                              </div>
                          </div>
                          <div className="row bottom">
                              <div className="col-lg-6">
                                  <div className="author-area">
                                      <div className="client">
                                          <p className="tag">Client:</p>
                                          <h4 className="platform">Themeforest</h4>
                                      </div>
                                      <div className="partner">
                                          <p className="tag">Partners:</p>
                                          <h4 className="platform">Envato</h4>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <p className="catagory">#3D #ANIMATION #USER #GENERATED #CONTENT #DESIGN #FRONT-END #DEVELOPMENT #BACK-END #DEVELOPMENT #CLOUD #RENDERING</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <section className="ms-hero work single">
                  <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll"></div>
              </section>
              <section className="work-single-wrap">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="portfolio-image">
                                  <Link href="#">
                                      <Image src={workImg3} alt="" />
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="portfolio-image">
                                  <Link href="#">
                                      <Image src={workImg4} alt="" />
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="portfolio-image">
                                  <a href="#">
                                      <Image src={workImg1} alt="" />
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="portfolio-image">
                                  <Link href="#">
                                      <Image src={workImg2} alt="" />
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="ms-spn--wrap container">
                      <div className="ms-spn--content row">
                          <div className="ms-spn--text col-md-6">
                              <Link className="ms-spn--link" href={`/work/${nextwork.slug}`}>
                                  <div className="ms-spn--head">
                                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                          <g>
                                              <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"></path>
                                          </g>
                                      </svg>
                                      <h3>Next work</h3>
                                  </div>
                                  <h1>{nextwork.title}</h1>
                              </Link>
                          </div>
                          <div className="col-md-6">
                              <Link href="#" className="ms-spn--thumb">
                                  <Image src={`/images/portfolio/${nextwork.image}`} alt={nextwork.title} width={800} height={600} />
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </main>

      <Footer />

  </div>
    )

};

export default WorksDetails;
