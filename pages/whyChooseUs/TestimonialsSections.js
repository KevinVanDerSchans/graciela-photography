import React from 'react';
import Image from 'next/image';

import CarmenAvatar from "../../public/images/avatars/carmenAvatar.png";
import FranciscaAvatar from "../../public/images/avatars/franciscaAvatar.png";
import SantiAvatar from "../../public/images/avatars/santiAvatar.png";

const TestimonialsSection = () => {
  return (
    <div className="testimonial-area">
        <div className="container">
          <h2 className="sub-title">Testimonios</h2>
          <h2 className="heading-title">Algunas reseñas de <br/> nuestros clientes</h2>

          <div className="testimonial-item">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimonial-wraper">
                  <div className="content">
                    Contratar a Graciela fue la mejor decisión para nuestro evento. Su enfoque profesional y creativo realmente destacó, capturando cada momento increíblemente bien. Las fotos reflejaron no sólo su habilidad técnica, sino también su capacidad para capturar las emociones. Recomendamos sus servicios a todo el mundo.
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={CarmenAvatar} alt="Avatar" />
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
                    Graciela hizo que nuestro día especial fuera realmente mágico. Desde la sesión inicial hasta la entrega final de las fotos, su profesionalidad y atención al detalle fueron excepcionales. Cada imagen contaba una historia, y su habilidad para capturar la esencia del momento nos dejó sin palabras. ¡Estamos muy agradecidos por sus excepcionales servicios!
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={FranciscaAvatar} alt="Avatar" />
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
                    Estamos encantados con las fotos que Graciela tomó en nuestra sesión. Su capacidad para crear un ambiente relajado y capturar momentos auténticos realmente brilla en las imágenes. Cada foto cuenta una historia única, y su talento artístico superó nuestras expectativas, ¡sin duda volveremos a elegirla para futuros eventos!
                  </div>

                  <div className="author">
                    <div className="author-image">
                      <Image src={SantiAvatar} alt="Avatar" />
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
