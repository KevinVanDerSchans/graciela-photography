import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabPanel } from 'react-tabs';

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
                          <h3>Sesiones personales</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/personal-sessions.jpg" alt="Sesiones personales" width={800} height={600} />
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
                          <Image decoding="async" src="/images/collection/fitness.jpg" alt="Fitness" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Animals */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/animals" aria-label="Animals">
                        <div className="ms-p-content">
                          <h3>Animales</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/animals.jpg" alt="Animales" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Pre-weddings */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/pre-weddings" aria-label="Pre-weddings">
                        <div className="ms-p-content">
                          <h3>Pre-bodas</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/pre-weddings.jpg" alt="Pre-bodas" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Weddings */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/weddings" aria-label="Weddings">
                        <div className="ms-p-content">
                          <h3>Bodas</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/weddings.jpg" alt="Bodas" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Pregnant */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/pregnant" aria-label="Pregnant">
                        <div className="ms-p-content">
                          <h3>Embarazo</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/pregnant.jpg" alt="Embarazo" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Babies */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/babies" aria-label="Babies">
                        <div className="ms-p-content">
                          <h3>Recién nacidos</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/babies.jpg" alt="Recién nacidos" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Exterior */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/exterior" aria-label="Exterior">
                        <div className="ms-p-content">
                          <h3>Exterior</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/exterior.jpg" alt="Exterior" width={800} height={600} />
                        </figure>
                      </Link>
                    </div>
                  </div>

                  {/* Dance */}
                  <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                    <div className="item--inner">

                      <Link href="/works/dance" aria-label="Dance">
                        <div className="ms-p-content">
                          <h3>Danza</h3>
                        </div>

                        <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                          <Image decoding="async" src="/images/collection/dance.jpg" alt="Danza" width={800} height={600} />
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
