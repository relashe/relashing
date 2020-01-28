import React from "react";
import PropTypes from "prop-types";

import Logo from '../../assets/images/relashe-logo-full.png';

const Footer = ({ ...props }) => {
 
  return (
    <section className="footer grid-container fluid scheme--brand-blue-dark u-spacing-container" {...props}>
      <div className="grid-x grid-margin-x grid-margin-y">
        <div className="cell screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2">
          <p className="t-copy-large t-font-default">
            We are an ambitious yet relashed relaxed team that loves working with like-minded brands, businesses and people.
          </p>
          <p className="t-copy-large t-font-default u-margin-bottom-3">
            <a className="t-link-large" href="mailto:hello@relashe.com">Drop us a line</a> if you would like to work together on something new and exciting.
          </p>
        </div>
      </div>
      <div className="grid-x grid-margin-x grid-margin-y u-margin-top-4">
        <div className="cell screen768-4 screen768-order-1">
          <div className="u-margin-bottom-4">
            <h4 className="t-title-2 u-margin-bottom-2">Get in touch</h4>
            <a className="t-link" href="mailto:hello@relashe.com">hello@relashe.com</a>
          </div>
          <div>
            <h4 className="t-title-2 u-margin-bottom-2">Find out more</h4>
            <a className="t-link u-margin-right-2" href="/link">Work</a>
            <a className="t-link u-margin-right-2" href="/link">Services</a>
            <a className="t-link" href="/link">About</a>
          </div>
        </div>
        <div className="cell screen768-5 screen1000-offset-2">
          <img src={Logo} className="footer__logo" alt="Relashe full logo"/>
          <p className="t-font-bold t-copy-large">
            Relashe, we got it.
          </p>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]).isRequired,
};

export default Footer;
