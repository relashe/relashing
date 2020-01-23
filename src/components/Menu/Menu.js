import React from 'react';
import PropTypes from "prop-types";

const Menu = ({ menuOpen, children, ...props}) => {

    return (
        <nav className="site-menu grid-container full" role="navigation" aria-label="Main menu" aria-hidden={!menuOpen} {...props}>
            <section className="site-menu__content-container grid-x">
                <div className="site-menu__content cell screen1000-6 u-spacing-banner">
                    <ul className="site-menu__menu">
                        <li className="site-menu__link">
                            <a id="menu-link-3" href="#menuLevel.Url" className="menu-link" aria-current="false">About</a>
                        </li>
                        <li className="site-menu__link">
                            <a id="menu-link-1" href="#menuLevel.Url" className="menu-link" aria-current="false">Services</a>
                        </li>
                        <li className="site-menu__link">
                            <a id="menu-link-2" href="#menuLevel.Url" className="menu-link" aria-current="false">Portfolio</a>
                        </li>
                        <li className="site-menu__link">
                            <a id="menu-link-4" href="#menuLevel.Url" className="menu-link" aria-current="false">Contact</a>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    );
};

Menu.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.objectOf(PropTypes.node),
    ]),
};

export default Menu;