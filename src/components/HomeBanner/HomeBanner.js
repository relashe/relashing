import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const HomeBanner = ({
  title,
  titleLines,
  intro,
  className,
  children,
  ...props
}) => {
  const classes = classnames(
    "grid-container fluid u-spacing-banner",
    className
  );

  const descriptionClasses = classnames("l-content-container-small", {
    "u-spacing-heading-top": !!title,
  });

  const [messageClass, setMessageClass] = useState(
    "home-banner-message--updated"
  );
  const [titleLine, setTitleLine] = useState(titleLines ? titleLines[0] : "");

  useEffect(() => {
    if (!titleLines) {
      return;
    }

    const messageInterval = setInterval(() => {
      // setMessageClass("");
      const lineIndex = Math.floor(Math.random() * (titleLines.length - 0)) + 0;

      setTitleLine(titleLines[lineIndex]);
    }, 9000);

    const messageClassInterval = setInterval(() => {
      // setMessageClass("home-banner-message--updated");
    }, 7000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(messageClassInterval);
    };
  }, []);

  return (
    <section className={classes} {...props}>
      <div className="grid-x grid-margin-x u-header-offset">
        <div className="cell screen0-10 screen768-9 screen768-offset-1 screen1000-10 screen1400-7 screen1400-offset-2">
          <div className="l-content-container-normal">
            {title && (
              <h1 className="t-heading-1 t-font-heading">
                {title}{" "}
                <span className={`home-banner-message ${messageClass}`}>
                  {titleLine}
                </span>
              </h1>
            )}
            {intro && (
              <div className={descriptionClasses}>
                {intro && <p className="t-copy-large">{intro}</p>}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

HomeBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]).isRequired,
};

export default HomeBanner;
