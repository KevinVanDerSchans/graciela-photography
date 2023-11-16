import Header from "../../src/components/Header";
import ContactForm from './ContactForm';
import Footer from "../../src/components/Footer";

import Logo from "../../public/images/temporalLogo.jpg";

function Contact() {

  return (
    <>
      <Header
        headerLogo={Logo}
      />

      <main className="ms-main">
        <div className="ms-page-content">

          <div className="contact-area contact">
            <div className="container">
              <div className="contact-area-inner">
                <div className="row">
                  <div className="col-lg-6">

                    <div className="content">
                      <h2 className="title">Are you up <br/> for a PHOTO SHOOT?</h2>
                      <p className="desc">Feel free to share your ideas and questions with me... I am here to help you! I am excited to learn more about the ideas you have in mind, and I will do my best to get back to you as soon as possible!</p>
                    </div>

                    <div className="row contact">
                      <ul className="col-lg-6 phone">
                        <li className="tag">Phone:</li>
                        <li>+34 666 39 41 50</li>
                      </ul>
                      <ul className="col-lg-6 email">
                        <li className="tag">Email:</li>
                        <li>gracieladelafuentee@gmail.com</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <ContactForm />
                 </div>
              </div>
            </div>
          </div>

          <div className="contact-map-area">
            <div className="container">
              <div className="row">
                <div className="col-12">

                  <div className="contact-map-area-fluid">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.4114258004773!2d-4.645048230414066!3d36.538541075789816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e21fd1d0ad39%3A0x1d0c5a7732c427e6!2sC.%20R%C3%ADo%20Velillos%2C%2019-3%2C%2029651%20Fuengirola%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1700135042053!5m2!1ses!2ses"
                      className="contact-map"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
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

export default Contact;
