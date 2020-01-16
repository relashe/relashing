import React from "react";
import PropTypes from "prop-types";

const PreviewContainer = ({ children, narrow, autoHeight }) => (
  <div
    style={{
      padding: "1rem",
      minHeight: autoHeight ? "none" : "100vh",
      margin: autoHeight ? "1rem 0" : 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: narrow ? "38rem" : "none",
      }}
    >
      {children}
    </div>
  </div>
);

PreviewContainer.propTypes = {
  narrow: PropTypes.bool,
  autoHeight: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PreviewContainer;
