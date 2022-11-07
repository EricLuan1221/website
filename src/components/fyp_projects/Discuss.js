import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";
// import styled from "styled-components";
// import React, {useState, useEffect} from "react";

const Discuss = () => {
  return (
      <section id="discuss">
        <div className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <Fade left>
                <div className="col-lg-6 col-md-8 wow fadeInLeft">
                  <div className="about-illustration mb-md-gap-50">
                    <img src="img/illustration/01.png" alt="iimage" />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-lg-6 col-md-10 wow fadeInRight">
                  <div className="about-text">
                    <div className="section-title mb-30">
                      <span className="title-tag">Discuss</span>
                      <h2 className="title">
                        Get an amazing experience with quality level
                        <span>team</span>
                      </h2>
                    </div>

                    <p>
                      IMF
                    </p>

                    <Link href="/service-2">
                      <a className="main-btn mt-30">Learn More</a>
                    </Link>
                    <div className="about-author">

                      {/*<div className="author-img">*/}
                      {/*  <img src="img/about-author.jpg" alt="Image" />*/}
                      {/*</div>*/}
                      {/*<div className="author-desc">*/}
                      {/*  <h5>Rosalina D. William</h5>*/}
                      {/*  <span>Founder of Bella</span>*/}
                      {/*</div>*/}
                      {/*<div className="brand-img">*/}
                      {/*  <img src="img/brand/2.png" alt="iimage" />*/}
                      {/*</div>*/}

                      <iframe width="600" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/29501a2d-c00a-40a6-a6ad-3ab4c7343e66"></iframe>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Discuss;
