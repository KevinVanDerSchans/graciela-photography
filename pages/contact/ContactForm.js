import React, { useRef, useState } from 'react';
import { serviceID, emailTemplate, publicAPI } from '../../src/config';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

function ContactForm() {
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
      <div className="contact-form">
        <form className="form" onSubmit={sendEmail} ref={form}>
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
              <input className="btn btn--primary" type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
