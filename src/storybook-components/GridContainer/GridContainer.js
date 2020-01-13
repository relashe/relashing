import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./sb-grid-container.scss";

const GridContainer = ({ children, className, containerClassName }) => {
  const classes = classNames("grid-x", "grid-margin-x", "grid-margin-y", className);
  const containerClasses = classNames("grid-container", "fluid", containerClassName);

  return (
    <div className={containerClasses}>
      <div className={classes}>{children}</div>
    </div>
  );
};

GridContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default GridContainer;
