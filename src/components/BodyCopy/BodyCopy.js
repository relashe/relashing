import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const BodyCopy = ({ className, children, ...props }) => {
  const classes = classnames("body-copy", className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]).isRequired,
};

export default BodyCopy;
