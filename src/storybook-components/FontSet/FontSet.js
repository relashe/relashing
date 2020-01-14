import React from "react";
import PropTypes from "prop-types";

import "./sb-font-set.scss";

import GridContainer from "../GridContainer/GridContainer";

const FontSet = ({ name, fontClass, sizePx, lineHeightPx }) => {
  return (
    <GridContainer className="card-swatch">
      <div className="sg-font cell">
        <div className="grid-x grid-margin-x">
          <div className="cell small-6 screen600-6">
            <span className={`sg-font__name ${fontClass}`}>{name}</span>
          </div>
          <div className="cell small-2 screen600-2">
            <span className={`sg-font__size ${sizePx.length > 1 && `hide-for-screen768`}`}>{sizePx[0]}</span>
            { sizePx.length > 1 && 
              <span className="sg-font__size show-for-screen768">{sizePx[1]}</span>
            }
          </div>
          <div className="cell small-2 screen600-2">
            <span className="sg-font__line-height">{lineHeightPx}</span>
          </div>
        </div>
    </div>
    </GridContainer>
  );
};

FontSet.propTypes = {
  name: PropTypes.string.isRequired,
  fontClass: PropTypes.string.isRequired,
  sizePx: PropTypes.arrayOf(PropTypes.string).isRequired,
  lineHeightPx: PropTypes.string,
};

export default FontSet;
