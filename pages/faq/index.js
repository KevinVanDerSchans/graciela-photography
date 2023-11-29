import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { serviceID, emailTemplate, publicAPI } from '../../src/config';
import Swal from "sweetalert2";
import Link from "next/link";

import HeaderTwo from "../../src/components/HeaderTwo";
import Logo from "../../public/images/temporalLogo.jpg";
import Footer from "../../src/components/Footer";

function Faq() {

  const [send, setSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      serviceID,
      emailTemplate,
      form.current,
      publicAPI
    )
    .then(
      () => {
        setSend(true);
        form.current.reset();

        Swal.fire({
          position: 'center',
          icon: 'success',
          iconColor: 'white',
          title: 'Mensaje enviado!',
          text: 'Te responderemos en la mayor brevedad. ¡Muchas gracias!',
          showConfirmButton: false,
          color: 'white',
          background:
            "linear-gradient(to left, #eb836a, #c94626)",
          timer: 4000,
        });
      },

      () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡No se ha podido enviar el mensaje! Prueba de nuevo más tarde',
          showConfirmButton: true,
          color: 'white',
          background:
          "linear-gradient(to left, #eb836a, #c94626)",
        });
      }
    );
  }

  return (
    <>
      <HeaderTwo
        headerLogo={Logo}
      />

      <main className="ms-main">
        <div className="ms-page-content">

        <div className="banner-area inner">
          <div className="container">
            <h1 className="heading-title">¿Tienes preguntas? <br/> Explora la sección <strong><span>FAQ</span></strong>!</h1>
          </div>
        </div>

        <div className="team-rules-area">
          <div className="container">
            <div className="team-rules-area-inner">
              <div className="border-line"></div>
                <div className="top">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <h4 className="heading-title"></h4>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <h1 className="title">Sobre los PHOTO SHOOT...</h1>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="row">
                    <div className="col-lg-4"></div>
                      <div className="col-lg-4 col-md-6">
                        <div className="inner">
                          <div className="border-line"></div>
                          <div className="content">
                            <p className="desc"> <br/> 01</p>
                            <h2 className="sub-title">¿Cómo agendar una sesión de fotos?</h2>
                            <p>Para programar una sesión de fotos, póngase en contacto a través de nuestro formulario de <Link href={'/contact'}>Contacto</Link> o por teléfono o correo electrónico. Facilite detalles como las fechas que prefiere y cualquier petición específica que pueda tener. Haré todo lo posible para encontrar un momento adecuado y discutir más detalles para su sesión.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="inner">
                          <div className="border-line"></div>
                          <div className="content">
                            <p className="desc"> <br/> 02</p>
                            <h2 className="sub-title">¿Cuánto dura una sesión de fotos?</h2>
                            <p>La duración de una sesión fotográfica típica suele ser de <strong>1 a 2 horas</strong>, lo que proporciona tiempo suficiente para captar una gran variedad de fotos y garantizar una experiencia relajada y agradable.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="inner">
                          <div className="border-line"></div>
                            <div className="content">
                              <p className="desc"> <br/> 03</p>
                              <h2 className="sub-title">¿Cómo debo prepararme?</h2>
                              <p>Elige ropa cómoda, trae objetos específicos o de adorno, comparte tus ideas y expectativas y... ¡duerme bien antes de la sesión!</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="inner">
                            <div className="border-line"></div>
                            <div className="content">
                              <p className="desc"> <br/> 04</p>
                              <h2 className="sub-title">¿Qué tipo de servicios fotográficos ofreces?</h2>
                              <p>Ofrezco servicios para sesiones personales, recién nacidos, bodas, exteriores... No olvides visitar mis <Link href={'/works'}>Sesiones</Link> para ver todos los trabajos.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4"></div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="team-rules-area">
          <div className="container">
            <div className="team-rules-area-inner">
              <div className="border-line"></div>
              <div className="top">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <h4 className="heading-title"></h4>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h1 className="title">Sobre reservas y cancelaciones...</h1>
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="row">
                  <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-md-6">
                      <div className="inner">
                        <div className="border-line"></div>
                          <div className="content">
                            <p className="desc"> <br/> 01</p>
                            <h2 className="sub-title">¿Cuál es la política de cancelación?</h2>
                            <p>La política de cancelación permite un reembolso completo si cancela al menos <strong>48 horas</strong> antes de la sesión programada. Póngase en contacto lo antes posible si necesita realizar cambios en su cita.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="inner">
                          <div className="border-line"></div>
                          <div className="content">
                            <p className="desc"> <br/> 02</p>
                            <h2 className="sub-title">¿Cómo puedo cambiar la fecha de mi sesión?</h2>
                            <p>Si necesita cambiar la fecha de su sesión, póngase en contacto al menos <strong>48 horas</strong> antes de la cita programada. Haré todo lo posible para satisfacer su petición y encontrar una fecha alternativa adecuada para su sesión.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="inner">
                          <div className="border-line"></div>
                            <div className="content">
                              <p className="desc"> <br/> 03</p>
                              <h2 className="sub-title">¿Cuándo debo ponerme en contacto para hacer una reserva?</h2>
                              <p>Se recomienda ponerse en contacto con al menos <strong>2 semanas de antelación</strong> para garantizar la disponibilidad y asegurar su fecha preferida para una sesión de fotos. Sin embargo, no dude en enviar un mensaje y haré todo lo posible para satisfacer las solicitudes de última hora en función de la disponibilidad.</p>
                            </div>
                          </div>
                        </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
          </div>
        </div>

        <div className="contact-area">
          <div className="container">
            <div className="border-line"></div>

              <div className="contact-area-inner">
                <div className="row">
                  <div className="col-lg-6">

                    <div className="content">
                      <h2 className="title">¿Tienes más <br/> preguntas?</h2>
                      <p className="desc">No dude en compartir sus ideas y preguntas conmigo... Estoy aquí para ayudarte. Estoy deseando saber más sobre las ideas que tienes en mente, ¡y haré todo lo posible por responderte lo antes posible!</p>
                    </div>

                    <div className="row contact">
                      <ul className="col-lg-6 phone">
                        <li className="tag">Móvil:</li>
                        <li>
                          <a href="tel:666394150">
                            +34 666 39 41 50
                          </a>
                        </li>
                      </ul>
                      <ul className="col-lg-6 email">
                        <li className="tag">Email:</li>
                        <li>
                          <a href="mailto:gracieladelafuentee@gmail.com">
                            gracieladelafuentee@gmail.com
                          </a>
                        </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-form">
                        <form onSubmit={sendEmail} ref={form} aria-label="Contact form">
                          <div className="row">
                            <div className="form-group col-6">
                              <input aria-required="true" aria-invalid="false" placeholder="Tu nombre" type="text" name="name" required />
                            </div>
                            <div className="form-group col-6">
                              <input aria-required="true" aria-invalid="false" placeholder="Tu email" type="email" name="email" required />
                            </div>
                            <div className="form-group col-12">
                              <input aria-invalid="false" placeholder="Asunto" type="text" name="subject" required />
                            </div>
                            <div className="form-group col-12">
                              <textarea aria-invalid="false" placeholder="Mensaje" name="message"></textarea>
                            </div>
                            <div className="ms-cf--bottom">
                              <input className="btn btn--primary" type="submit" value="ENVIAR" />
                            </div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}

export default Faq;
