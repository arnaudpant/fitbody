import React from "react";
import lunges from "/images/lunges.png";
import yoga from "/images/yoga-pose.png";
import extended from "/images/extended.png";

const Excercices = () => {
    return (
        <section id="schedule">
            <div className="container exercice__container">
                <div className="exercice__top">
                    <h2 className="section__title">
                        Benefits of{" "}
                        <span className="hightlights">Exercice</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                        <br /> Odio ipsam quos fugiat voluptates esse ex.
                    </p>
                </div>
                <div className="exercice__wrapper">

                    <div className="exercice__item" data-aos="zoom-in" data-aos-duration="800">
                        <span className="exercice__icon">
                            <img src={lunges} />
                        </span>
                        <div className="exercice__content">
                            <h4>Healthy life</h4>
                            <p>
                                Lorem ipsum dolor sit amet<br /> consectetur
                                adipisicing
                            </p>
                        </div>
                    </div>

                    <div className="exercice__item" data-aos="zoom-in" data-aos-duration="800">
                        <span className="exercice__icon">
                            <img src={yoga} />
                        </span>
                        <div className="exercice__content">
                            <h4>Increased flexibility</h4>
                            <p>
                                Lorem ipsum dolor sit amet<br /> consectetur
                                adipisicing
                            </p>
                        </div>
                    </div>

                    <div className="exercice__item" data-aos="zoom-in" data-aos-duration="800">
                        <span className="exercice__icon">
                            <img src={extended} />
                        </span>
                        <div className="exercice__content">
                            <h4>Reducing blood pressure</h4>
                            <p>
                                Lorem ipsum dolor sit amet<br /> consectetur
                                adipisicing
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Excercices;
