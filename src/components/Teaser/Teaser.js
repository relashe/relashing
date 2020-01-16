import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Teaser = ({ title, intro, content, className, ...props }) => {
  const classes = classnames("teaser grid-container full u-spacing-container-margin", className);

  const descriptionClasses = classnames("l-content-container-small", {
    'u-spacing-heading-top' : !!title
  });

  return (
    <section className={classes} {...props}>
      <div className="grid-x">
          <div className="cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2">
              <div className="l-content-container-normal t-copy-large">
                {content}
              </div>
          </div>
      </div>
  </section>
  );
};

Teaser.propTypes = {
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

export default Teaser;
