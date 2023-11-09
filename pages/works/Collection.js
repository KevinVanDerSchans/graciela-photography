import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import works from '../../src/data/Works.json';


const Collection = () => {

  return (
    <>
      <div className="ms-portfolio-filter-area main-isotop project">
        <div className="container">

          <Tabs>
            <div className="portfolio_wrap style-1">
              <div className="filter portfolio-feed">

                <TabPanel className="row">

                    {/* Personal Sessions */}
                      <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                        <div className="item--inner">

                          <Link href="/works/personal-sessions" aria-label="Personal Sessions">
                            <div className="ms-p-content">
                              <h3>Personal Sessions</h3>
                            </div>

                            <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                              <Image decoding="async" src="/images/collection/personal-sessions.jpg" alt="Personal Sessions" width={800} height={600} />
                            </figure>
                          </Link>
                        </div>
                      </div>

                    {/* Fitness */}
                      <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                        <div className="item--inner">

                          <Link href="/works/fitness" aria-label="Fitness">
                            <div className="ms-p-content">
                              <h3>Fitness</h3>
                            </div>

                            <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                              <Image decoding="async" src="/images/collection/fitness.jpg" alt="Personal Sessions" width={800} height={600} />
                            </figure>
                          </Link>
                        </div>
                      </div>

                    {/* Animals */}
                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                      <div className="item--inner">

                        <Link href="/works/animals" aria-label="Animals">
                          <div className="ms-p-content">
                            <h3>Animals</h3>
                          </div>

                          <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                            <Image decoding="async" src="/images/collection/animals.jpg" alt="Animals" width={800} height={600} />
                          </figure>
                        </Link>
                      </div>
                    </div>

                    {/* Pre-weddings */}
                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                      <div className="item--inner">

                        <Link href="/works/pre-weddings" aria-label="Pre-weddings">
                          <div className="ms-p-content">
                            <h3>Pre-weddings</h3>
                          </div>

                          <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                            <Image decoding="async" src="/images/collection/pre-weddings.jpg" alt="Pre-weddings" width={800} height={600} />
                          </figure>
                        </Link>
                      </div>
                    </div>


                    {/* Weddings */}
                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                      <div className="item--inner">

                        <Link href="/works/weddings" aria-label="Weddings">
                          <div className="ms-p-content">
                            <h3>Weddings</h3>
                          </div>

                          <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                            <Image decoding="async" src="/images/collection/weddings.jpg" alt="Weddings" width={800} height={600} />
                          </figure>
                        </Link>
                      </div>
                    </div>


                    {/* Pregnant */}
                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                      <div className="item--inner">

                        <Link href="/works/pregnant" aria-label="Pregnant">
                          <div className="ms-p-content">
                            <h3>Pregnant</h3>
                          </div>

                          <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                            <Image decoding="async" src="/images/collection/pregnant.jpg" alt="Pregnant" width={800} height={600} />
                          </figure>
                        </Link>
                      </div>
                    </div>


                </TabPanel>

              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Collection;
