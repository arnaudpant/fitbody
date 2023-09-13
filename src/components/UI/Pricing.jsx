import React from "react";

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="container">
                <div className="pricing__top">
                    <h2 className="section__title">
                        Gym <span className="hightlights">Pricing</span> plan
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        <br /> elit. Itaque, dolorem. Libero cumque fugiat
                        inventore tenetur!
                    </p>
                </div>

                <div className="pricing__wrapper">
                    <div
                        className="pricing__item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                    >
                        <div className="pricing__card-top">
                            <h2 className="section__title">Regular member</h2>
                            <h2 className="section__title pricing">
                                50€<span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span></span>Unlimited access to the gym
                                </li>
                                <li>
                                    <span></span>Custumer support
                                </li>
                                <li>
                                    <span></span>Personal trainer
                                </li>
                                <li>
                                    <span></span>Standard options
                                </li>
                                <li>
                                    <span></span>5 classes per week
                                </li>
                            </ul>
                            <button className="register__btn">Join Now</button>
                        </div>
                    </div>

                    <div
                        className="pricing__item pricing__item-02"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1200"
                    >
                        <div className="pricing__card-top">
                            <h2 className="section__title">Premium member</h2>
                            <h2 className="section__title pricing">
                                70€<span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                {/* <li><span></span>Unlimited access to the gym</li> */}
                                <li>
                                    <span></span>Custumer support
                                </li>
                                <li>
                                    <span></span>Personal trainer
                                </li>
                                <li>
                                    <span></span>Standard options
                                </li>
                                <li>
                                    <span></span>5 classes per week
                                </li>
                            </ul>
                            <button className="register__btn">Join Now</button>
                        </div>
                    </div>

                    <div
                        className="pricing__item pricing__item-03"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1200"
                    >
                        <div className="pricing__card-top">
                            <h2 className="section__title">Standard member</h2>
                            <h2 className="section__title pricing">
                                100€<span>/month</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                {/* <li><span></span>Unlimited access to the gym</li>
                                <li><span></span>Custumer support</li>
                                <li><span></span>Personal trainer</li> */}
                                <li>
                                    <span></span>Standard options
                                </li>
                                <li>
                                    <span></span>5 classes per week
                                </li>
                            </ul>
                            <button className="register__btn">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
