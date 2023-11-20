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
              <Image src={gracielaCVImage} alt="Graciela experience" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="right-side-content">
              <h1 className="heading-title">About Me</h1>
              <p>
                <em>
                  <span className="cate-color">Argentinian by birth and Spanish at heart, &nbsp;</span> &nbsp;
                </em>
              </p>
              <p className="desc">
                I&apos;ve always had a deep love for photography.
                At the age of 10, my parents gifted me my first camera, and ever since, I haven&apos;t stopped capturing the most beautiful moments of my life.
                Photography allows me to convey all the feelings and emotions that surround me, sharing them with those in my life.
              </p>

              <p className="desc">
                Beyond photography, my joy comes from my three daughters and my pack of dogs.
                Among my hobbies, I relish learning dance and exploring new culinary delights in Malaga.
              </p>

              <div className="services-area">
                <h2 className="services-title">My Services</h2>
                <div className="services-items">
                  <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={PhotographyIcon} className="attachment-full size-full" alt="Photography" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Photography</span>
                          </h4>
                          <p className="ms-sb--text">
                            Your go-to photographer for timeless moments and quality visuals. Reliability meets creativity in every shot we frame.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={PhotoEditingIcon} className="attachment-full size-full" alt="Photo editing" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Photo Editing</span>
                          </h4>
                          <p className="ms-sb--text">
                            Refine and enhance your images with our professional photo editing services. Elevate the visual impact of your photos through expert touch-ups, color correction, and creative enhancements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="ms-sb img-top">

                        <div className="ms-sb--img default">
                          <Image src={AdviceIcon} className="attachment-full size-full" alt="Advice" />
                        </div>

                        <div className="ms-sb--inner">
                          <h4 className="ms-sb--title">
                            <span>Photographic advice</span>
                          </h4>
                          <p className="ms-sb--text">
                            Professional tips for stunning photos. Elevate your photography with expert advice on composition, lighting, and technique.
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
