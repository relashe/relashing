import React from "react";
import PropTypes from "prop-types";

const BaseButton = ({ children, className, type, disabled, onClick, buttonRef, ...props }) => (
  <button
    className={className}
    disabled={disabled}
    type={type}
    onClick={onClick}
    ref={buttonRef}
    {...props}
  >
    {children}
  </button>
);

BaseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.node.isRequired,
  buttonRef: PropTypes.func,
};

BaseButton.defaultProps = {
  type: "button",
};

export default BaseButton;
