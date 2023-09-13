import React, { useEffect, useRef } from "react";
import logo from "/dumble.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const navLinks = [
        {
            path: "#home",
            display: "Home",
        },
        {
            path: "#schedule",
            display: "Schedule",
        },
        {
            path: "#classes",
            display: "Classes",
        },
        {
            path: "#pricing",
            display: "Pricing",
        },
    ];

    const headerRef = useRef(null);

    const headerFunc = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add("sticky__header");
        } else {
            headerRef.current.classList.remove("sticky__header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        console.log(targetAttr);

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80
        })
    }


    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="logo FitBody" />
                        </div>
                        <h2>FitBody</h2>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {navLinks.map((link) => (
                                <li className="nav__item" key={link.display}>
                                    <a href={link.path} onClick={handleClick}>{link.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__right">
                        <button className="register__btn">Register</button>
                        <span className="mobile__menu">
                            <GiHamburgerMenu />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
