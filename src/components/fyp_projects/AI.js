import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const AI = () => {
  return (
    <section id="ai" className="service-area section-gap primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              {/*<span className="title-tag">Our Services</span>*/}
              <h2 className="title">
                AI分析學校
                <span></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Fade left>
            <div
              className="col-md-8 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-20">
                    <div className="service-img">
                      <img src="img/service/08.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-10">
                    <div className="service-desc">
                      <h4>AI分析學校</h4>
                      <p>
                        除了可以幫助大家以最簡單的方法選擇到合適自己的學校外
                        還可以利用此功能了解到不同學校
                      </p>
                      {/*<Link href="/service-2">*/}
                      {/*  <a className="service-link">Learn More</a>*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/*#002*/}
          <Fade right>
            <div
              className="col-md-8 col-sm-10 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="service-box pro-service mt-50">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/12.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Kindergarten</h4>
                      <p>
                        為大家分析全港各區的幼稚園
                      </p>
                      {/*<Link href="/service">*/}
                      {/*  <a className="service-link">Learn More</a>*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/*#003*/}
          <Fade left>
            <div
              className="col-md-8 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              <div className="service-box pro-service mt-50">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/13.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>
                        <span>Primary School</span>
                      </h4>
                      <p>
                        為大家分析全港各區的小學
                      </p>
                      {/*<Link href="/service-2">*/}
                      {/*  <a className="service-link">Learn More</a>*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/*#004*/}
          <Fade right>
            <div
              className="col-md-8 col-sm-10 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="service-box pro-service mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/14.png" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Secondary School</h4>
                      <p>
                        為大家分析全港各區的中學
                      </p>
                      {/*<Link href="/service-2">*/}
                      {/*  <a className="service-link">Learn More</a>*/}
                      {/*</Link>*/}
                      {/*<a >Learn More</a>*/}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>


        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              Need Help With Your IT Endeavors? Contact Us to Get a Pro Service!
            </p>
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <i className="fal fa-ticket" /> Generate A Ticket
              </a>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AI;
