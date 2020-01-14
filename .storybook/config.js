import { configure, addParameters } from '@storybook/react';
import { create } from "@storybook/theming";

import "../src/styles/app.scss"; // this is where you link your global styles


addParameters({
  options: {
    theme: create({
      base: "light",
      appBg: "#f0f0f0",
      colorSecondary: "#173450",
      brandTitle: "Relashe",
      brandImage: "https://www.google.com/a/cpanel/relashe.com/images/logo.gif?service=google_gsuite",
      fontBase: '"Arapey", serif;',
    }),
    panelPosition: "right",
  },
});

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
//   require("../src/guidelines/welcome/welcome.stories.js");
  require("../src/core/colours/colours.stories.js");

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);