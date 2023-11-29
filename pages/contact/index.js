import HeaderTwo from "../../src/components/HeaderTwo";
import Logo from "../../public/images/temporalLogo.jpg";
import ContactForm from './ContactForm';
import Footer from "../../src/components/Footer";

function Contact() {

  return (
    <>
      <HeaderTwo
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
                      <h2 className="title">¿Te animas a un <br/> PHOTO SHOOT?</h2>
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
                      className="contact-map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51284.21336635254!2d-4.635928!3d36.54776300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e222251b495f%3A0xbdcce2fdcf15f978!2s29651%20Las%20Lagunas%20de%20Mijas%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1701262444334!5m2!1ses!2ses"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
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
