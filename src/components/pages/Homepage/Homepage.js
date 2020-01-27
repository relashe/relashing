import React from "react";
import PropTypes from "prop-types";

import PageMain from "../PageMain/PageMain";

// Components
import HomeBanner from '../../HomeBanner/HomeBanner';
import TextBanner from '../../TextBanner/TextBanner';
import Teaser from '../../Teaser/Teaser';
import Footer from '../../Footer/Footer';

const Homepage = ({ children }) => {
  return (
    <PageMain>
      <HomeBanner
        title="A digital team focused on all things web."
        intro={`Relashe, we got it.`}
      />
      <Teaser
        content={`
          Relashe is a solutions team focused on client experiences and close relationships with brands and businesses.
          <br/>
          From responsive web development to bespoke web applications, web design and voice development, we work with our clients and partners
          to create the best products focused for the end users and for the end users.
        `}
      />
      <TextBanner
        title="This is what we do."
        content={<>
          <p>
            We are a talented team that loves working with brands to create and enhance their online present. We work with the most
            recent technologies to create crafted products that make our partners (and ourselves) proud of.
          </p>
          <p>
            All this comes from creating a strong relationship with our partners and being driven by our passion and curiosity
            around technology.
          </p>
        </>}
      />
      {children}
      <Footer />
    </PageMain>
  );
};

Homepage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Homepage;
