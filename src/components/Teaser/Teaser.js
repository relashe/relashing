import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Parse from 'html-react-parser';

const Teaser = ({ content, className, ...props }) => {
  const classes = classnames("teaser grid-container fluid u-spacing-container scheme--brand-grey", className);

  return (
    <section className={classes} {...props}>
      <div className="grid-x ">
          <div className="cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2">
              <div className="l-content-container-normal t-copy-large-2">
                {Parse(content)}
              </div>
          </div>
      </div>
    </section>
  );
};

Teaser.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]),
};

export default Teaser;
