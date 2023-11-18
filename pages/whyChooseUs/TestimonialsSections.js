import React from 'react';
import Image from 'next/image';

import CarmenAvatar from "../../public/images/avatars/carmenAvatar.png";
import FranciscaAvatar from "../../public/images/avatars/franciscaAvatar.png";
import SantiAvatar from "../../public/images/avatars/santiAvatar.png";

const TestimonialsSection = () => {
  return (
    <div className="testimonial-area">
        <div className="container">
          <h2 className="sub-title">Testimonials</h2>
          <h2 className="heading-title">Some Reviews From <br/> Our Clients</h2>

          <div className="testimonial-item">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimonial-wraper">
                  <div className="content">
                    Hiring Graciela was the best decision for our event. Her professional and creative approach really stood out, capturing every moment incredibly well. The photos reflected not only her technical skill, but also her ability to capture genuine emotions. We would recommend her services to anyone!
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={CarmenAvatar} alt="" />
                    </div>
                    <div className="author-details">
                      <h2 className="name">Carmen Olmedo</h2>
                      <p className="desc">11/2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimonial-wraper">
                  <div className="content">
                    Graciela made our special day truly magical. From the initial session to the final delivery of the photos, their professionalism and attention to detail were exceptional. Each image told a story, and their ability to capture the essence of the moment left us speechless. We are grateful for their exceptional services!
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={FranciscaAvatar} alt="" />
                    </div>
                    <div className="author-details">
                      <h2 className="name">Francisca Andrades</h2>
                      <p className="desc">10/2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimonial-wraper">
                  <div className="content">
                    We were thrilled with the photos Graciela took at our session. Her ability to create a relaxed atmosphere and capture authentic moments really shines through in the images. Each photo tells a unique story, and her artistic talent raised our expectations - we will definitely choose her again for future events!
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={SantiAvatar} alt="" />
                    </div>
                    <div className="author-details">
                      <h2 className="name">Santi González</h2>
                      <p className="desc">09/2023</p>
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

export default TestimonialsSection
