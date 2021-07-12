import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Parser from "html-react-parser";

const PageBanner = ({
  title,
  intro,
  content,
  className,
  children,
  ...props
}) => {
  const classes = classnames(
    "grid-container fluid u-header-offset u-spacing-container-bottom",
    className
  );

  const descriptionClasses = classnames("l-content-container-small", {
    "u-spacing-heading-top": !!title,
  });

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x u-spacing-container-margin-top">
        <div className="cell screen0-10 screen0-offset-1 screen768-8 screen1000-6 screen1000-offset-2">
          <div className="l-content-container-medium">
            {title && <h1 className="t-heading-2 t-font-heading">{title}</h1>}
            {(intro || content) && (
              <div className={descriptionClasses}>
                {intro && <p className="t-title-2">{intro}</p>}
                <div className="body-copy u-spacing-base-top">
                  {content && Parser(content)}
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
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
  ]),
};

export default PageBanner;
