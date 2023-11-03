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
                  {works.map((work, index) => {
                    return (
                      <div key={index} className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                        <div className="item--inner">
                          <Link href={`/works/${work.slug}`} aria-label={work.title}>

                            <div className="ms-p-content">
                              <h3>{work.title}</h3>
                            </div>

                            <figure className="ms-p-img media-wrapper media-wrapper--4:4">
                              <Image decoding="async" src={`/images/portfolio/${work.image}`} alt={work.title} width={800} height={600} />
                            </figure>
                          </Link>
                        </div>
                      </div>
                      )
                    })}
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
