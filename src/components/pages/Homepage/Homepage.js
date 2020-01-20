import React from "react";
import PropTypes from "prop-types";

import PageMain from "../PageMain/PageMain";

// Components
import HomeBanner from '../../HomeBanner/HomeBanner';
import Teaser from '../../Teaser/Teaser';

const Homepage = ({ children }) => {
  return (
    <PageMain>
      <HomeBanner
        title="A digital team focused on all things web."
        intro={`Relashe, we got it.`}
        className="scheme--brand-blue-dark"
      />
      <Teaser content="Relashe is a solutions team focused on client experiences and close relationships with brands and businesses." />
      {children}
    </PageMain>
  );
};

Homepage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Homepage;
