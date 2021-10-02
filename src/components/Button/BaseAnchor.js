import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";

export const isExternal = (url) => /^(http|tel|mailto|\/\/)/.test(url || "");

const BaseAnchor = ({ to, onClick, children, className, ...props }) => {
  return isExternal(to) || (!to && onClick) ? (
    <a
      className={className}
      href={to}
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link className={className} to={to} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

BaseAnchor.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BaseAnchor;
