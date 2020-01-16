import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const BodyCopy = ({ title, intro, content, className, children, ...props }) => {
  const classes = classnames("grid-container fluid u-header-offset u-spacing-container-margin-bottom", className);

  const descriptionClasses = classnames("l-content-container-small", {
    'u-spacing-heading-top' : !!title
  });

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x u-spacing-container-margin-top">
          <div className="cell screen0-10 screen768-8 screen768-offset-1 screen1000-6 screen1000-offset-2">
              <div className="l-content-container-medium">
                  { title &&
                    <h1 className="t-heading-2 t-font-heading">{title}</h1>
                  }
                  { (intro || content) &&
                    <div className={descriptionClasses}>
                      { intro && 
                        <p className="t-title-2">{intro}</p>
                      }
                      <div className="body-copy u-spacing-base-top">
                          {content}
                      </div>
                    </div>
                  }
                  {children}
              </div>
          </div>
      </div>
  </section>
  );
};

BodyCopy.propTypes = {
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

export default BodyCopy;
