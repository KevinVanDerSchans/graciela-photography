import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Animals from "public/images/collection/animals.jpg";
import Fitness from "public/images/collection/fitness.jpg";
import PersonalSessions from "public/images/collection/personal-sessions.jpg";
import Babies from "public/images/collection/babies.jpg";
import Exterior from "public/images/collection/weddings.jpg";

const WorksSection = () => {
  return (
    <div className="testimonial-area">
      <div className="container">
        <h2 className="sub-title">Have you already seen some of </h2>
        <h2 className="heading-title">our best Works?</h2>

        <div className="project-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio_wrap" id="a645bf8">
                <div className="portfolio-feed ms-p--d row">
                  <span className="load_filter">
                    <svg className="load-filter-icon" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                      <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round" fill="none">
                        <animateTransform attributeName="transform" type="rotate"
                            repeatCount="indefinite" dur="1s"
                            values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1">
                        </animateTransform>
                        <animate attributeName="stroke-dasharray" repeatCount="indefinite"
                            dur="1s"
                            values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                            keyTimes="0;0.5;1">
                        </animate>
                      </circle>
                    </svg>
                  </span>

                  <div className="grid-sizer col-md-12"></div>
                    <div className="overlay zoom left h-align-top grid-item-p col-md-12 post-48 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-style">
                      <div className="item--inner">
                        <Link href="/works/animals" aria-label="Animals">
                          <figure className="ms-p-img media-wrapper media-wrapper--1:1">
                            <Image decoding="async" src={Animals} alt="Animals" />
                          </figure>
                          <div className="ms-p-content">
                            <h3>Animals</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_wrap" id="7f1071b">
                <div className="portfolio-feed ms-p--d row">
                  <span className="load_filter">
                    <svg className="load-filter-icon" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                      <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round" fill="none">
                        <animateTransform attributeName="transform" type="rotate"
                            repeatCount="indefinite" dur="1s"
                            values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1">
                        </animateTransform>
                        <animate attributeName="stroke-dasharray" repeatCount="indefinite"
                            dur="1s"
                            values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                            keyTimes="0;0.5;1">
                        </animate>
                      </circle>
                    </svg>
                  </span>

                  <div className="grid-sizer col-md-6"></div>
                    <div className="below zoom left grid-item-p col-md-6 post-56 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-creative">
                      <div className="item--inner">
                        <Link href="/works/fitness" aria-label="Fitness">
                          <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={Fitness} alt="Fitness" />
                          </figure>
                          <div className="ms-p-content">
                            <h3>Fitness</h3>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="below zoom left grid-item-p col-md-6 post-55 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-design">
                      <div className="item--inner">
                        <Link href="/works/personal-sessions" aria-label="Personal Sessions">
                          <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={PersonalSessions} alt="Personal Sessions" />
                          </figure>
                          <div className="ms-p-content">
                            <h3>Personal Sessions</h3>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="below zoom left grid-item-p col-md-6 post-54 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-photo">
                      <div className="item--inner">
                        <Link href="/works/babies" aria-label="Babies">
                          <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={Babies} alt="Babies" />
                          </figure>
                          <div className="ms-p-content">
                              <h3>Babies</h3>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="below zoom left grid-item-p col-md-6 post-53 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-style">
                      <div className="item--inner">
                        <Link href="/works/weddings" aria-label="Weddings">
                          <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                            <Image decoding="async" src={Exterior} alt="Weddings" />
                          </figure>
                          <div className="ms-p-content">
                            <h3>Weddings</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksSection;
