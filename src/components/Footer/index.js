import React from 'react';
import Link from 'next/link';
import ScrollToTop from '../ScrollTop';

const Footer = (props) => {
  const { footerClass } = props;

  return (
    <>
      <footer className={footerClass ? footerClass : 'ms-footer ms-footer--template'}>

        <section className="container footer-container" data-parallax="on">
          <div className="footer-title text-center">
            <h1>¿Te animas a un<strong></strong> <br/> <strong>PHOTO SHOOT?</strong> <Link href="/contact" className="btn-footer">Hablemos <i className="fas fa-arrow-right"></i></Link></h1>
          </div>

          <div className="social-area">
            <div className="row area-inner">

              <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                <div className="social-wrapper">
                  <div className="content">
                    <h3 className="platform">Instagram</h3>
                      <a href="https://www.instagram.com/graciela_delafuentee" target="_blank">@graciela_delafuentee</a>
                  </div>
                  <div className="social">
                    <a href="https://www.instagram.com/graciela_delafuentee" target="_blank" className="icon"><i className="socicon-instagram"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                <div className="social-wrapper">
                  <div className="content">
                    <h3 className="platform">Twitter</h3>
                      <a href="#" className="link">@GracielaDelafuentee</a>
                    </div>
                    <div className="social">
                      <a href="#" className="icon"><i className="socicon-twitter"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                <div className="social-wrapper">
                  <div className="content">
                    <h3 className="platform">Facebook</h3>
                      <a href="https://www.facebook.com/graciela.delafuente2" target="_blank" className="link">Graciela Delafuente</a>
                    </div>
                    <div className="social">
                      <a href="https://www.facebook.com/graciela.delafuente2" target="_blank" className="icon"><i className="socicon-facebook"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                <div className="social-wrapper">
                  <div className="content">
                    <h3 className="platform">Whatsapp</h3>
                      <a href="https://wa.me/666394150" target="_blank" className="link">Graciela de la fuente</a>
                    </div>
                    <div className="social">
                      <a href="https://wa.me/666394150" target="_blank" className="icon"><i className="socicon-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="copyright-area">
                <div className="left-side">
                  <span></span>
                </div>
                <div className="right-side">
                  <p>©2023 <a href="https://www.linkedin.com/in/kevinvanderschans/" target="_blank" className="author">Kevin Schans</a>, All Rights Reserved.</p>
                </div>
            </div>
        </section>
      </footer>

      <ScrollToTop />
    </>
  )
};

export default Footer;
