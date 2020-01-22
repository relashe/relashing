import React from "react";
import PropTypes from "prop-types";

import Header from '../../Header/Header';
import Menu from '../../Menu/Menu';

const PageMain = ({ children }) => {
  return (
    <main className="page-main" id="main-content">
      <Header />
      {/* <Menu /> */}
      <div className="page-content" aria-disabled="false">
          {children}
      </div>
    </main>
  );
};

PageMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.objectOf(PropTypes.node),
  ]),
};

export default PageMain;
