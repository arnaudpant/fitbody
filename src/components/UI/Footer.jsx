import React from "react";
import logo from "/dumble.png";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer"  data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000">
            <div className="container">
                <div className="footer__wrapper">

                    <div className="footer__box">
                        <div className="logo">
                            <div className="logo__img">
                                <img src={logo} alt="logo FitBody" />
                            </div>
                            <h2>FitBody</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea perspiciatis qui aliquam ex obcaecati
                            ipsum!
                        </p>
                    </div>

                    <div className="footer__box">
                        <h4 className="footer__title">Company</h4>
                        <ul className="footer__links">
                            <li><a href="#">Our program</a></li>
                            <li><a href="#">Our plan</a></li>
                            <li><a href="#">Become a member</a></li>
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
