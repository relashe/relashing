import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const PageBanner = ({ title, intro, content, className, children, ...props }) => {
  const classes = classnames("grid-container fluid u-header-offset u-spacing-container-margin-bottom", className);

  const descriptionClasses = classnames("l-content-container-small", {
    'u-spacing-heading-top' : !!title
  });

  return (
    <p>Test 2</p>
  );
};

PageBanner.propTypes = {
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

export default PageBanner;
