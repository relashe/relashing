import React from "react";
import PropTypes from "prop-types";

import "./sb-color-swatch.scss";

import GridContainer from "../GridContainer/GridContainer";

const ColorSwatch = ({ color, name, variable, children }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <GridContainer className="card-swatch">
      <div className="cell screen768-4">
        <div className="color-swatch__preview" style={style} />
      </div>
      <div className="cell screen768-5">
        <div className="color-swatch__details">
          <h3 className="color-swatch__name u-margin-bottom-1">{name}</h3>
          <div className="color-swatch__hex">{color}</div>
          <div className="color-swatch__variable">{variable}</div>
        </div>
      </div>
      <div className="cell screen768-3">{children}</div>
    </GridContainer>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default ColorSwatch;
