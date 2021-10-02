import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BaseButton from "./BaseButton";
import BaseAnchor from "./BaseAnchor";

const Button = ({
  text,
  onClick,
  to,
  disabled,
  variant,
  iconPosition,
  icon,
  type,
  className,
  ...props
}) => {
  const classes = classNames(
    "button",
    {
      "button--primary": variant === "primary",
      "button--icon": !!icon,
      "button--icon button--icon-right": iconPosition === "right",
    },
    className
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return to ? (
    <BaseAnchor to={to} onClick={handleClick} className={classes} {...props}>
      {icon && iconPosition !== "right" && icon({ className: "button__icon" })}
      <span className="button__text">{text}</span>
      {icon && iconPosition === "right" && icon({ className: "button__icon" })}
    </BaseAnchor>
  ) : (
    <BaseButton
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      {...props}
    >
      {icon && iconPosition !== "right" && icon({ className: "button__icon" })}
      <span className="button__text">{text}</span>
      {icon && iconPosition === "right" && icon({ className: "button__icon" })}
    </BaseButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["link", "primary", "outlined", "nav"]),
  iconPosition: PropTypes.oneOf(["default", "left", "right"]),
  icon: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  variant: "primary",
  type: "button",
};

export default Button;
