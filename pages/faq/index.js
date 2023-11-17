import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Logo from "../../public/images/temporalLogo.jpg";
import Link from "next/link";

function Faq() {
  return (
    <>
      <Header
        headerLogo={Logo}
      />

      <main className="ms-main">
        <div className="ms-page-content">

        <div className="banner-area inner">
          <div className="container">
            <h1 className="heading-title">Do you have <strong><span>questions</span></strong>? <br/> Explore our FAQ for answers!</h1>
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
                                <h1 className="title">About photo shoots...</h1>
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
                                        <h2 className="sub-title">How to schedule a photo shoot?</h2>
                                        <p>To schedule a photo shoot, please contact us through our <Link href={'/contact'}>Contact</Link> form or by phone or email. Provide details such as preferred dates and any specific requests you may have. We will work with you to find a suitable time and discuss further details for your session.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="inner">
                                    <div className="border-line"></div>
                                    <div className="content">
                                        <p className="desc"> <br/> 02</p>
                                        <h2 className="sub-title">How long does a session last?</h2>
                                        <p>The duration of a typical photo session is generally around <strong>1 to 2 hours</strong>, providing ample time to capture a variety of shots and ensure a relaxed and enjoyable experience.</p>
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
                                        <h2 className="sub-title">How should I prepare for a photo shoot?</h2>
                                        <p>Choose comfortable and confident outfits, bring any specific items or props, share your ideas and expectations and... get a good night&apos;s sleep before the shoot!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="inner">
                                    <div className="border-line"></div>
                                    <div className="content">
                                        <p className="desc"> <br/> 04</p>
                                        <h2 className="sub-title">What types of photography services do you offer?</h2>
                                        <p>We offer services for personal sessions, animals, weddings, outdoors... Don&apos;t forget to check out our <Link href={'/works'}>Works</Link> section to see all our work.</p>
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
                                <h1 className="title">About reservations and cancellations...</h1>
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
                                        <h2 className="sub-title">What is the cancellation policy?</h2>
                                        <p>Our cancellation policy allows for a full refund if you cancel at least <strong>48 hours</strong> before the scheduled photo shoot. Please contact us as soon as possible if you need to make changes to your appointment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="inner">
                                    <div className="border-line"></div>
                                    <div className="content">
                                        <p className="desc"> <br/> 02</p>
                                        <h2 className="sub-title">How can I change the date of my session?</h2>
                                        <p>If you need to change the date of your photo session, please reach out to us at least <strong>48 hours</strong> before the scheduled appointment. We will do our best to accommodate your request and find a suitable alternative date for your session.</p>
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
                                        <h2 className="sub-title">How soon should I contact you to make a reservation?</h2>
                                        <p>
                                          It&apos;s recommended to contact us at least <strong>2 weeks in advance</strong> to ensure availability and secure your preferred date for a photo session. However, feel free to reach out, and we will do our best to accommodate last-minute requests based on availability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4"></div>
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
