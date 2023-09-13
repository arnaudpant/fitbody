import React from "react";
import trainerImg from "/images/trainer.png";

const Start = () => {
    return (
        <section id="classes">
            <div className="container">
                <div className="start__wrapper">
                    <div className="start__img">
                        <img
                            src={trainerImg}
                            alt="femme avec haltere"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
                    </div>

                    <div
                        className="start__content"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h2 className="section__title">
                            Ready to make a{" "}
                            <span className="hightlights">change ?</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minima, odio iusto nam, quas iure maiores
                            dolorum vero ducimus voluptatem iste perferendis,
                            architecto amet eum! Odit eius quaerat nulla
                            adipisci atque.
                        </p>
                        <button className="register__btn">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
