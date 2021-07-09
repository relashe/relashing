import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ServiceCard = ({ title, description, className, ...props }) => {
  const classes = classnames("service-card", className);

  return (
    <article className={classes} {...props}>
      {title && <h3 className="service-card__title">{title}</h3>}

      {description && (
        <div className="service-card__description t-copy">{description}</div>
      )}
    </article>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default ServiceCard;
