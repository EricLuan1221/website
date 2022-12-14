import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const IndexOnePageTestimonialsArea = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section
            className="testimonial-section with-pattern testimonial-brand-section primary-bg"
            id="feedbacks"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-50">
                            <span className="title-tag">Testimonials</span>
                            <h2 className="title">
                                Clients <span>feedbacks</span>
                            </h2>
                        </div>
                        <div className="testimonial-slider-progress mb-40">
                            <span className="line-one" />
                            <span className="line-two" />
                        </div>
                    </div>
                </div>
                <div
                    className="testimonial-boxes row"
                    id="testimonialSliderOne"
                >
                    <Slider {...settings}>
                        <div className="col extra-padding">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ???Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.???
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col extra-padding">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ???Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.???
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col extra-padding">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-1.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ???Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.???
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col extra-padding">
                            <div className="testimonial-box">
                                <div className="author-img">
                                    <img
                                        src="img/testimonial/testimonial-author-2.png"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        ???Hundreds Of Successful Organizations
                                        Companies of every size, and in 62
                                        different countries, are using Betakit.???
                                    </p>
                                    <div className="author-info">
                                        <h5>Miranda H. Halim</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="brand-logos section-gap-top row justify-content-between align-items-center">
                    <Slider {...settings2}>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/1.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/2.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/3.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/4.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/5.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/1.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/2.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/3.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/4.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/5.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default IndexOnePageTestimonialsArea;
