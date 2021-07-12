import classnames from "classnames";
import Parser from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";

const Teaser = ({ content, textCenter, className, children, ...props }) => {
  const classes = classnames(
    "teaser grid-container fluid u-spacing-container",
    {
      "l-text-center": !!textCenter,
    },
    className
  );

  return (
    <section className={classes} {...props}>
      <div className="grid-x ">
        <div className="cell screen0-10 screen0-offset-1 screen768-10 screen1000-8 screen1000-offset-2">
          <div className="l-content-container-normal t-copy-large">
            {content && Parser(content)}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

Teaser.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default Teaser;
