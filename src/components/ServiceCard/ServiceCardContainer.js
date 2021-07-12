import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ServiceCardContainer = ({ title, children, className, ...props }) => {
  const classes = classnames(
    "service-card-container grid-container fluid u-spacing-container",
    className
  );

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x">
        {title && (
          <div className="cell screen0-offset-1 screen1400-offset-2">
            <h2 className="t-heading-2 u-spacing-content-bottom">{title}</h2>
          </div>
        )}
        <div className="cell screen0-12 screen768-10 screen768-offset-1">
          <div className="grid-x grid-margin-x grid-margin-y">
            {children.map((serviceCard) => (
              <div className="cell screen0-10 screen0-offset-1 screen768-5 screen768-offset-1">
                {serviceCard}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceCardContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

export default ServiceCardContainer;
