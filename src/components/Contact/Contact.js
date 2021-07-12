import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import BodyCopy from "../BodyCopy/BodyCopy";

const Contact = ({ heading, className, ...props }) => {
  const classes = classnames(
    "grid-container fluid u-spacing-container",
    className
  );

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x grid-margin-y">
        <div className="cell screen0-10 screen0-offset-1 screen1000-5 screen1000-offset-1 screen1400-4 screen1400-offset-2">
          <h2 className="t-heading-1">{heading}</h2>
        </div>
        <div className="cell screen0-10 screen0-offset-1 screen1000-4 screen1000-offset-1">
          <BodyCopy className="u-spacing-content-bottom">
            <p>
              If you want to talk about new projects, ideas or need help with
              progressing your career send a message.
            </p>
            <p className="u-spacing-content-bottom">Happy to help!</p>
            <p>
              <strong>EMAIL</strong>
            </p>
            <a href="mailto:paciencia@relashe.com">paciencia@relashe.com</a>
          </BodyCopy>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
};

export default Contact;
