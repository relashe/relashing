import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Parser from "html-react-parser";

const Teaser = ({ content, className, ...props }) => {
  const classes = classnames(
    "teaser grid-container fluid u-spacing-container",
    className
  );

  return (
    <section className={classes} {...props}>
      <div className="grid-x ">
        <div className="cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2">
          <div className="l-content-container-normal t-copy-large">
            {content && Parser(content)}
          </div>
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
