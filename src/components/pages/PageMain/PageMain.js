import React from "react";
import PropTypes from "prop-types";

const PageMain = ({ children }) => {

  return (
    <main class="page-main" id="main-content">
      <div class="page-content" aria-disabled="false">
          {children}
      </div>
    </main>
  );
};

PageMain.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default PageMain;
