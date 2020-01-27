import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextBanner = ({ title, intro, content, className, children, ...props }) => {
  const classes = classnames("grid-container fluid u-spacing-container", className);

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x">
        <div className="cell screen0-10 screen768-8 screen768-offset-1 screen1000-6 screen1000-offset-1">
          { intro && 
            <p className="t-title-2">{intro}</p>
          }
        </div>
        <div className="cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2">
          { title &&
            <h2 className="t-heading-3 t-font-heading">{title}</h2>
          }
          { content && 
            <div className="body-copy u-margin-top-4">
              {content}
            </div>
          }
        </div>
        { children && 
          <div className="cell">
            {children}
          </div>
        }
      </div>
    </section>
  );
};

TextBanner.propTypes = {
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

export default TextBanner;
