import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ServiceCard = ({
  title,
  description,
  className,
  imageClassName,
  ...props
}) => {
  const classes = classnames("service-card", className);
  const imageClasses = classnames(
    "service-card__image responsive-embed arProfile ",
    imageClassName
  );

  return (
    <article className={classes} {...props}>
      <div class="service-card__image-container">
        <div class={imageClasses}></div>
      </div>
      {title && <h3 className="service-card__title">{title}</h3>}

      {description && (
        <div className="service-card__description">{description}</div>
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
