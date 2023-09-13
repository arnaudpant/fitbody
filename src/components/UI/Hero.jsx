import React from "react";
import heroImg from "/images/gym-02.png";
import dumbleIcon from "/dumble.png";
import { GiPlayButton } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h2
                            className="section__title"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Excercie is the key to a{" "}
                            <span className="hightlights">healthy</span>{" "}
                            lifestyle
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <br /> Ullam laudantium doloribus odit voluptatibus
                            harum sunt.
                        </p>
                        <div
                            className="hero__btns"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <button className="register__btn">
                                Get Started
                            </button>
                            <button className="watch__btn">
                                <span>
                                    <GiPlayButton />
                                </span>
                                Watch video
                            </button>
                        </div>
                    </div>

                    <div className="hero__img">
                        <div className="hero__img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box__img">
                                            <img
                                                src={heroImg}
                                                alt="femme avec un ballon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="heart__rate"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <h5>Heart Rate</h5>
                                <span>
                                    <FaHeartbeat />
                                </span>
                                <h6>2567 BPM</h6>
                            </div>

                            <div
                                className="gym__location"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <span>
                                    <MdAddLocationAlt />
                                </span>
                                <h5>
                                    Find a new gym
                                    <br /> near you
                                </h5>
                            </div>

                            <div className="dumble__icon" data-aos="fade-down" data-aos-duration="1000">
                                <img src={dumbleIcon} alt="logo halteres" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
