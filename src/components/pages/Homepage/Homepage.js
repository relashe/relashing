import React from "react";
import PropTypes from "prop-types";

import PageMain from "../PageMain/PageMain";

const Homepage = ({ children }) => {

  return (
    <PageMain>
        {children}
    </PageMain>
  );
};

Homepage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Homepage;
