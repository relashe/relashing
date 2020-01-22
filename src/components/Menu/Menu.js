import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

const Menu = ({ menuOpen, className, children, ...props}) => {
    const classes = classnames("site-menu", className);

    return (
        <nav className="site__menu" aria-expanded={menuOpen} {...props}></nav>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.objectOf(PropTypes.node),
    ]),
};

export default Menu;