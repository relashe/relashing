import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ContentContainer = ({ className, children, ...props }) => {
  const classes = classnames(
    "grid-container fluid u-spacing-container",
    className
  );

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x">
        <div className="cell screen0-10 screen768-8 screen768-offset-1 screen1000-6 screen1000-offset-2">
          <div className="l-content-container-medium">{children}</div>
        </div>
      </div>
    </section>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]).isRequired,
};

export default ContentContainer;
