import React from 'react';
import Image from 'next/image';

import ServicesBackground from "public/images/collection/animals/6.jpg";
import PhotographyIcon from "../../public/images/icons/photographyIcon.svg";
import AdviceIcon from "../../public/images/icons/adviceIcon.svg";
import PhotoEditingIcon from "../../public/images/icons/photoEditingIcon.svg";

const ServiceSection = () => {
  return (
    <>
      <div className="services-area-2">
        <div className="container">
          <div className="services-area-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="left-side-content">
                  <h2 className="heading-title">Why choose us?</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="right-side-content">
                  <h2 className="desc">Authentic testimonials, collaborations with Málaga brands and a wide range of specialized services.</h2>
                </div>
              </div>
            </div>
            <div className="services-image">
              <Image src={ServicesBackground} alt="image"/>
            </div>

            <div className="services-bottom">
              <h2 className="heading-title text-center">Our services</h2>
              <div className="services-item">
                <div className="row">

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={PhotographyIcon} alt="image"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Photography</span>
                        </h3>
                        <p className="ms-sb--text">Your go-to photographer for timeless moments and quality visuals. Reliability meets creativity in every shot we frame.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={PhotoEditingIcon} alt="image"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Photo Editing</span>
                        </h3>
                        <p className="ms-sb--text">Refine and enhance your images with our professional photo editing services. Elevate the visual impact of your photos through expert touch-ups, color correction, and creative enhancements.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 text-center">
                    <div className="ms-sb img-top">
                      <div className="ms-sb--img boxed margin-x-auto five">
                        <Image src={AdviceIcon} alt="image"/>
                      </div>
                      <div className="ms-sb--inner">
                        <h3 className="ms-sb--title">
                          <span>Photographic advice.</span>
                        </h3>
                        <p className="ms-sb--text">Professional tips for stunning photos. Elevate your photography with expert advice on composition, lighting, and technique</p>
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
