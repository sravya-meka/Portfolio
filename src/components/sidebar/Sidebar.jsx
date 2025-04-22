import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import DarkLogo from "../../assets/DarkLogo.svg";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = ({ theme, switchTheme }) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={theme === 'light' ? Logo : DarkLogo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" title="Home">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" title="About">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link" title="Services">
                                    <RiFileList3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" className="nav__link" title="Resume">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link" title="Portfolio">
                                    <RiStackLine />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button
                        onClick={() => {
                            switchTheme();
                            showMenu(false);
                        }}
                        className="nav__link footer__button"
                        title="Toggle Theme"
                    >
                        {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div
                className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
                onClick={() => showMenu(!toggle)}
            >
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
