import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";


const Header = ({ className, children, ...props}) => {
    const classes = classnames("header", className);

    return (
        <header className={classes} {...props}>
            <div className="header__inner">
                <a id="site-logo" href="/" className="header-logo" title="Mountain Partners Home Link" />
                <div className="header__menu-button" role="button" aria-pressed="false" tabindex="0">
                    <span id="site-nav-button" className="header-nav-button">
                        <span className="header-nav-button__title a-hide" data-open="Close" data-closed="Menu">Menu</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
};

export default Header;