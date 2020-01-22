import React, {useState, useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";


const Header = ({ className, menu, children, ...props}) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef(null);
    
    const classes = classnames("header", className);

    const onMenuButtonClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("body--menu-open");
    };

    const onMenuEscape = (e) => {
        if (e.keyCode === 27 && menuOpen) {
          setMenuOpen(false);
        }
      }

    useEffect(() => {
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", onMenuEscape, false);

        return () => {
            document.removeEventListener("keydown", onMenuEscape);
        };
    }, [menuOpen]);

    return (
        <header className={classes} {...props}>
            <aside className="header__side-bar" aria-expanded={menuOpen}>
                <a id="site-logo" href="/" className="header__logo" title="Mountain Partners Home Link" />
                {menu}
            </aside>
            <div className="header__menu-button" role="button" aria-pressed={menuOpen} tabIndex="0" ref={menuButton} onClick={onMenuButtonClick}>
                <span id="site-nav-button" className="header-nav-button">
                    <span className="header-nav-button__title a-hide" data-open="Close" data-closed="Menu">Menu</span>
                </span>
            </div>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.node),
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.objectOf(PropTypes.node),
    ]),
};

export default Header;