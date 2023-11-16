import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { serviceID, emailTemplate, publicAPI } from '../../src/config';

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
      (result) => {
        setSend(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <>
      <div className="contact-form">
        <form className="form" onSubmit={sendEmail} ref={form}>
          <div className="row">
            <div className="form-group col-6">
              <input aria-required="true" aria-invalid="false" placeholder="Your name" type="text" name="name" required />
            </div>
            <div className="form-group col-6">
              <input aria-required="true" aria-invalid="false" placeholder="Your email" type="email" name="email" required />
            </div>
            <div className="form-group col-12">
              <input aria-invalid="false" placeholder="Title" type="text" name="subject" required />
            </div>
            <div className="form-group col-12">
              <textarea aria-invalid="false" placeholder="Message" name="message"></textarea>
            </div>
            <div className="ms-cf--bottom">
              <input className="btn btn--primary" type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
